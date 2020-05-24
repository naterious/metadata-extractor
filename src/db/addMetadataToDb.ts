import { IBookMetaData } from "../types";

import {getDbInstance} from './getInstance';

export const addMetadataToDb = (metadata: IBookMetaData): Promise<number[]> => {
  const dbInstance = getDbInstance();

  return dbInstance('books')
    .insert(metadata)
    .then(resp => resp)
    .finally(() => dbInstance.destroy());
}