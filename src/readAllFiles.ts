import glob from 'glob';
import asyncPool from "tiny-async-pool";

import { readAndParseXmlFile } from './readAndParseXmlFile';
import {addMetadataToDb} from './db';

const getAllFiles = (src: string) => {
  return glob.sync(src + '/**/*.rdf');
};

const run = () => {
  const fileList = getAllFiles('cache');

  let promises = [];

  console.log('Starting to parse metadata')
  var i;
  for (i = 0; i < fileList.length; i++) {
    const meta = readAndParseXmlFile(fileList[i]);
    promises.push(addMetadataToDb(meta))
  }
  console.log('All metadata parsed')

  const timeout = (i: any) => new Promise(resolve => setTimeout(() => resolve(i), i));
  return asyncPool(10, promises, timeout)
    .then(() => console.log('added all records to the database'))
}

run();