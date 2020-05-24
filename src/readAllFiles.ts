import glob from 'glob';
import asyncPool from "tiny-async-pool";

import { readAndParseXmlFile } from './readAndParseXmlFile';
import {addMetadataToDb} from './db';

const getAllFiles = (src: string) => {
  return glob.sync(src + '/**/*.rdf');
};

const run = async () => {
  const fileList = getAllFiles('cache');
  let promises = [];

  console.log('Starting to parse metadata')
  var i;
  for (i = 0; i < fileList.length; i++) {
    // parse metadata for each file and add promise
    // to add meta to database for each
    const meta = readAndParseXmlFile(fileList[i]);
    promises.push(addMetadataToDb(meta))
  }

  console.log('All metadata parsed')

  const timeout = (i: any) => new Promise(resolve => setTimeout(() => resolve(i), i));
  // using an async pool to reduce amount of concurrent requests
  // to the database to 10 then add all records to the database
  await asyncPool(10, promises, timeout);

  return console.log('added all records to the database');
}

run();