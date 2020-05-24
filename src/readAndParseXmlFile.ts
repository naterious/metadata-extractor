import {parseString} from 'xml2js';
import {readFileSync} from 'fs';

import { IBookMetaData } from './types';
import { getSubject, getTitle, getAuthor, getId, getLanguage } from './utils';

export const readAndParseXmlFile = (fileName: string): IBookMetaData => {
  // read data from file
  const data = readFileSync(fileName);
  
  let metaObject: IBookMetaData;
  // parse rdf xml to a JS object
  parseString(data, (err: Error, parsedXml: any) => {
    // select meta data details from parsed rdf file
    const rdfDetails = parsedXml['rdf:RDF']['pgterms:ebook'][0];

    const title = getTitle(rdfDetails['dcterms:title']);
    const subjects = getSubject(rdfDetails['dcterms:subject']);
    const author = getAuthor(rdfDetails['dcterms:creator']);
    const language = getLanguage(rdfDetails['dcterms:language'])

    const bookMeta: IBookMetaData = {
      id: getId(rdfDetails['$']),
      title,
      author,
      publisher: rdfDetails['dcterms:publisher'][0],
      publicationDate: rdfDetails['dcterms:issued'][0]['_'],
      language,
      subject: JSON.stringify(subjects).substring(0, 250),
      licenseRights: rdfDetails['dcterms:rights'][0],
    }

    return metaObject = bookMeta;
  });

  return metaObject;
};
