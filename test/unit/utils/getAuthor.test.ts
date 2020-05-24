import {expect} from 'chai';
import {getAuthor} from '../../../src/utils/getAuthor';
import { ICreatorDetails } from '../../../src/types';

describe('getAuthor', () => {
  describe('when creatorDetails is null', () => {
    it('returns null value', () => {
      const result = getAuthor(null);
      expect(result).to.eql(null);
    });
  });

  describe('when creatorDetails is first element is null', () => {
    it('returns null value', () => {
      const result = getAuthor({} as ICreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:agent` is not found', () => {
    it('returns null value', () => {
      const result = getAuthor([{}] as ICreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:agent` is found but first element is null', () => {
    it('returns null value', () => {
      const result = getAuthor([{'pgterms:agent': {}}] as ICreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:name` is found', () => {
    it('returns name value', () => {
      const result = getAuthor([{'pgterms:agent': [{'pgterms:name': ['authorName']}]}] as ICreatorDetails);
      expect(result).to.eql('authorName');
    });
  });
})