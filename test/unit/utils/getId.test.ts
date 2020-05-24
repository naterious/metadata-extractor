import {expect} from 'chai';
import {getId} from '../../../src/utils/getId';

describe('getId', () => {
  describe('gets the id from the about details', () => {
    it('returns id value as number', () => {
      const result = getId({'rdf:about': 'pg/100'});
      expect(result).to.eql(100);
    });
  });
});