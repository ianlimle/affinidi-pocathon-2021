export const idDocumentVCData = {
  type: 'IDDocumentCredentialPersonV1',
  data: {
    '@type': ['Person', 'PersonE', 'IDDocumentPerson'],
    gender: 'Male',
    birthDate: '1986-07-01T00:00:00.000Z',
    givenName: 'Oleksander',
    familyName: 'Kravets',
    address: 'apt. 9, Pushkinsakya 31-V, Kyiv, Ukraine',
    hasIDDocument: {
      '@type': ['Role', 'IDDocumentRole'],
      hasIDDocument: {
        '@type': 'IDDocument',
        issuer: 'Automobile Association of Singapore',
        documentType: 'driving_license',
        issueDate: '2019...',
        classificationMethod: 'automatic',
        idClass: '...',
        countryCode: '...',
      },
    },
  },
  holderDid: '',
};
