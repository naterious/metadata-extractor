import * as r from 'ramda';
import { LanguageDetails } from '../types';

// gets the language name from the languageDetails
// falls back to null value if any nested property
// is not defined
export const getLanguage = (languageDetails: LanguageDetails): string | null => {
  if (r.isNil(languageDetails)) {
    return null;
  }
  if (r.isNil(languageDetails[0])) {
    return null;
  }
  const languageDescription = languageDetails[0]['rdf:Description'];
  if (r.isNil(languageDescription)) {
    return null;
  }
  if (r.isNil(languageDescription[0])) {
    return null;
  }
  const languageValue = languageDescription[0]['rdf:value'];
  if (r.isNil(languageValue)) {
    return null;
  }
  if (r.isNil(languageValue[0])) {
    return null;
  }
  return languageValue[0]['_'];
}