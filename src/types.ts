export interface IBookMetaData {
  id: number;
  title: string;
  author: string;
  publisher: string;
  publicationDate: string;
  language: string;
  subject: string;
  licenseRights: string;
}

export type CreatorDetails = [
  {
    'pgterms:agent': [
      {
        'pgterms:name': string[]
      }
    ]
  }
];

export type AboutDetails = {
  'rdf:about': string,
};

export type LanguageDetails = [
  {
    'rdf:Description': [
      {
        'rdf:value': [
          {
            '_': string;
          }
        ]
      }
    ]
  }
];