import * as r from 'ramda';

// gets the title from the title details
// falls back to null value if not defined
export const getTitle = (titleDetails: string[]): string | null => {
  return r.ifElse(
    r.isNil,
    () => null,
    () => titleDetails[0]
  )(titleDetails);
}