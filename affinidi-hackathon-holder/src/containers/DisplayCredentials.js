import React from 'react';

const DisplayCredentials = ({cred}) => {
    console.log(cred)
    const { givenName, familyName } = cred.credentialSubject.data;
    const { documentType } = cred.credentialSubject.data.hasIDDocument.hasIDDocument;
    
    return (
        <>
            <p><strong>Given Name:</strong> {givenName}</p>
            <p><strong>Family Name:</strong> {familyName}</p>
            <p><strong>Document Type:</strong> {documentType}</p>
        </>
    )   
}

export default DisplayCredentials;