import {expect} from 'chai';
import {getTitle} from '../../../src/utils/getTitle';

describe('getTitle', () => {
  describe('when the title details are null', () => {
    it('returns null value', () => {
      const result = getTitle(null);
      expect(result).to.eql(null);
    });
  });

  describe('when title details are no null', () => {
    it('returns title value', () => {
      const result = getTitle(['bookTitle']);
      expect(result).to.eql('bookTitle');
    });
  });
});