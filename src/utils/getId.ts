import * as r from 'ramda';
import { AboutDetails } from '../types';

// gets the id name from the about details
export const getId = (aboutDetails: AboutDetails): number => {
  const name = aboutDetails['rdf:about'];
  const rawId = r.last(r.split('/', name));

  return parseInt(rawId, 10);
}