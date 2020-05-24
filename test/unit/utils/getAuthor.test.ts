import {expect} from 'chai';
import {getAuthor} from '../../../src/utils/getAuthor';
import { CreatorDetails } from '../../../src/types';

describe('getAuthor', () => {
  describe('when creatorDetails is null', () => {
    it('returns null value', () => {
      const result = getAuthor(null);
      expect(result).to.eql(null);
    });
  });

  describe('when creatorDetails is first element is null', () => {
    it('returns null value', () => {
      const result = getAuthor({} as CreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:agent` is not found', () => {
    it('returns null value', () => {
      const result = getAuthor([{}] as CreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:agent` is found but first element is null', () => {
    it('returns null value', () => {
      const result = getAuthor([{'pgterms:agent': {}}] as CreatorDetails);
      expect(result).to.eql(null);
    });
  });

  describe('when `pgterms:name` is found', () => {
    it('returns name value', () => {
      const result = getAuthor([{'pgterms:agent': [{'pgterms:name': ['authorName']}]}] as CreatorDetails);
      expect(result).to.eql('authorName');
    });
  });
})