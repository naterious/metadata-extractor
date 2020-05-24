import * as r from 'ramda';
import { ICreatorDetails } from '../types';

// gets the author name from the creatorDetails
// falls back to null value if any nested property
// is not defined
export const getAuthor = (creatorDetails: ICreatorDetails): string | null => {
  if (r.isNil(creatorDetails)) {
    return null;
  }
  if (r.isNil(creatorDetails[0])) {
    return null;
  }
  const agentDetails = creatorDetails[0]['pgterms:agent'];
  if (r.isNil(agentDetails)) {
    return null;
  }
  if (r.isNil(agentDetails[0])) {
    return null;
  }
  const nameDetails = agentDetails[0]['pgterms:name'];
  if (r.isNil(nameDetails)) {
    return null;
  }
  return nameDetails[0];
}