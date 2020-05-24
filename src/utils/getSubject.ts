import * as r from 'ramda';

// gets the subject name from the subject details
// falls back to null value if not defined
export const getSubject = (subjectDetails: object): string[] | null => {
  return r.ifElse(
    r.isNil,
    () => null,
    (subjectsForBook) => {
      return r.map((subject: any) => {
        return subject['rdf:Description'][0]['rdf:value'][0];
      })(subjectsForBook);
    }
  )(subjectDetails);
}