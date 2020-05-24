import {expect} from 'chai';
import sinon from 'sinon';
import * as fs from 'fs';
import * as xml2js from 'xml2js';

import {readAndParseXmlFile} from '../../src/readAndParseXmlFile';
import * as utils from '../../src/utils';
import { parsedXml } from './fixtures';

describe('readAndParseXmlFile', () => {
  let getSubject: any;
  let getTitle: any;
  let getAuthor: any;
  let getId: any;
  let getLanguage: any;

  let readFileSync: any;
  let parseString: any;

  const bookMetaData = {
    id: 1,
    title: 'title',
    author: 'author',
    publisher: 'Project Gutenberg',
    publicationDate: '1971-12-01',
    language: 'en',
    subject: JSON.stringify(['subject1', 'subject2']),
    licenseRights: 'Public domain in the USA.'
  }

  beforeEach(() => {
    getSubject = sinon.stub(utils, 'getSubject');
    getTitle = sinon.stub(utils, 'getTitle');
    getAuthor = sinon.stub(utils, 'getAuthor');
    getId = sinon.stub(utils, 'getId');
    getLanguage = sinon.stub(utils, 'getLanguage');

    readFileSync = sinon.stub(fs, 'readFileSync');
    parseString = sinon.stub(xml2js, 'parseString');
  });

  afterEach(() => sinon.restore());

  describe('When all details are passed', () => {
    it('returns all meta data', () => {
      readFileSync.returns({});
      parseString.returns(parsedXml);

      getSubject.returns(JSON.parse(bookMetaData.subject));
      getTitle.returns(bookMetaData.title);
      getAuthor.returns(bookMetaData.author);
      getId.returns(bookMetaData.id);
      getLanguage.returns(bookMetaData.language)

      const result = readAndParseXmlFile('./test/pg1.rdf');
      expect(result).to.eql(bookMetaData);
    });
  });

  describe('When some details are not defined', () => {
    it('returns all meta data with null values for missing props', () => {
      readFileSync.returns({});
      parseString.returns(parsedXml);

      getSubject.returns(JSON.parse(bookMetaData.subject));
      getTitle.returns(null);
      getAuthor.returns(bookMetaData.author);
      getId.returns(bookMetaData.id);
      getLanguage.returns(null)

      const result = readAndParseXmlFile('./test/pg1.rdf');
      expect(result).to.eql({...bookMetaData, language: null, title: null});
    });
  });
});