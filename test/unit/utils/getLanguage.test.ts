import {expect} from 'chai';
import {getLanguage} from '../../../src/utils/getLanguage';
import { LanguageDetails } from '../../../src/types';

describe('getLanguage', () => {
  describe('when languageDetails is null', () => {
    it('returns null value', () => {
      const result = getLanguage(null);
      expect(result).to.eql(null);
    });
  });

  describe('when languageDetails is first element is null', () => {
    it('returns null value', () => {
      const result = getLanguage({} as LanguageDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `rdf:Description` is not found', () => {
    it('returns null value', () => {
      const result = getLanguage([{}] as LanguageDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `rdf:Description` is found but first element is null', () => {
    it('returns null value', () => {
      const result = getLanguage([{'rdf:Description': {}}] as LanguageDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `rdf:value` is not found', () => {
    it('returns null value', () => {
      const result = getLanguage([{'rdf:Description': {}}] as LanguageDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `rdf:value` is found but first element is null', () => {
    it('returns null value', () => {
      const result = getLanguage([
        {
          'rdf:Description': [
            {
              'rdf:value': []
            }
          ]
        }
      ] as unknown as LanguageDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `rdf:value` is found', () => {
    it('returns language value', () => {
      const result = getLanguage([
        {
          'rdf:Description': [
            {
              'rdf:value': [
                {
                  '_': 'en',
                }
              ]
            }
          ]
        }
      ] as LanguageDetails);
      expect(result).to.eql('en');
    });
  });
})