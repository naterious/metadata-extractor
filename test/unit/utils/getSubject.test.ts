import {expect} from 'chai';
import {getSubject} from '../../../src/utils/getSubject';

describe('getSubject', () => {
  describe('when subject details is null', () => {
    it('returns null value', () => {
      const result = getSubject(null);
      expect(result).to.eql(null);
    });
  });

  describe('when subject details is not null', () => {
    it('returns subject', () => {
      const subjectDetails = [
        {
          'rdf:Description': [
            {
              'rdf:value': [
                'subject'
              ]
            }
          ]
        }
      ];
      const result = getSubject(subjectDetails);
      expect(result).to.eql(['subject']);
    });
  });
});