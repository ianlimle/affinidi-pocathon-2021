import React, { useState, useContext } from 'react';
import AppContext from 'context/app';
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  FormFile,
} from 'react-bootstrap';
import ApiService from 'utils/apiService';
import 'pages/application/Application.scss';
import firebase from 'utils/firebase/firebase';
import randomstring from 'randomstring';

interface IBaseVCData {
  givenName: string;
  familyName: string;
  issueDate: string;
}

interface IExtendVCData {
  country: string;
  email: string;
  issuer: string;
  documentType: string;
  id: string;
}

const defaultBaseVCData: IBaseVCData = {
  givenName: '',
  familyName: '',
  issueDate: '',
};

const defaultExtendVCData: IExtendVCData = {
  country: 'Singapore',
  issuer: 'Singapore Government',
  documentType: 'Personal Identification Card',
  email: '',
  id: '',
};

interface IPayload extends IBaseVCData {
  idClass: string;
  holderDid: string;
}

const Application: React.FC = (): React.ReactElement => {
  const { appState } = useContext(AppContext);
  const [inputDID, setinputDID] = useState(appState.didToken || '');

  const [baseVCData, setBaseVCData] = useState<IBaseVCData>(defaultBaseVCData);

  const [extendVCData, setExtendVCData] = useState<IExtendVCData>(
    defaultExtendVCData
  );

  /**
   * Function for issuing an unsigned employment VC.
   * */
  const issueDocumentPersonVC = async () => {
    try {
      const { givenName, familyName, issueDate } = baseVCData;

      const applicationID: string = randomstring.generate(10);
      const vcToStringify = {
        ...extendVCData,
        documentApplicationID: applicationID,
      };

      const payload: IPayload = {
        givenName,
        familyName,
        issueDate,
        idClass: JSON.stringify(vcToStringify),
        holderDid: inputDID || appState.didToken || '',
      };

      // Store unsignedVC into issuer's datsabase
      const db = firebase.firestore();
      db.collection('id-waiting-approval').add({
        username: appState.username,
        payload,
        applicationID,
        approved: false,
      });

      alert('You have successfully submitted your application.');
    } catch (error) {
      ApiService.alertWithBrowserConsole(error.message);
    }
  };

  const resetToDefaults = () => {
    setinputDID(appState.didToken || '');

    setBaseVCData(defaultBaseVCData);
    setExtendVCData(defaultExtendVCData);
  };

  const updateBaseVC = (e: any) => {
    setBaseVCData({ ...baseVCData, [e.target.name]: e.target.value });
  };

  const updateExtendBaseVC = (e: any) => {
    setExtendVCData({ ...extendVCData, [e.target.name]: e.target.value });
  };

  return (
    <div className='tutorial'>
      <div className='tutorial__step'>
        <Button style={{ float: 'right' }} onClick={(e) => resetToDefaults()}>
          Clear all fields
        </Button>

        <p>
          <strong>Step 1:</strong>Please fill in details of your identification
        </p>
        <FormGroup controlId='email'>
          <FormLabel className='label' style={{ margin: '10px 0 0 0' }}>
            Email Address:
          </FormLabel>
          <FormControl
            name='email'
            type='text'
            value={extendVCData.email}
            onChange={(e) => updateExtendBaseVC(e)}
          />
        </FormGroup>

        <FormGroup controlId='givenName'>
          <FormLabel className='label' style={{ margin: '10px 0 0 0' }}>
            Given Name:
          </FormLabel>
          <FormControl
            name='givenName'
            type='text'
            value={baseVCData.givenName}
            onChange={(e) => updateBaseVC(e)}
          />
        </FormGroup>

        <FormGroup controlId='familyName'>
          <FormLabel style={{ margin: '10px 0 0 0' }}>Family Name:</FormLabel>
          <FormControl
            name='familyName'
            type='text'
            value={baseVCData.familyName}
            onChange={(e) => updateBaseVC(e)}
          />
        </FormGroup>

        <FormGroup controlId='issueDate'>
          <FormLabel style={{ margin: '10px 0 0 0' }}>
            Date of Issuance:
          </FormLabel>
          <FormControl
            name='issueDate'
            type='text'
            value={baseVCData.issueDate}
            onChange={(e) => updateBaseVC(e)}
          />
        </FormGroup>

        <FormGroup controlId='country'>
          <FormLabel style={{ margin: '10px 0 0 0' }}>Country:</FormLabel>
          <FormControl
            name='country'
            type='text'
            value={extendVCData.country}
            onChange={(e) => updateExtendBaseVC(e)}
          />
        </FormGroup>

        <FormGroup controlId='idnumber'>
          <FormLabel style={{ margin: '10px 0 0 0' }}>
            Personal Identification Number:
          </FormLabel>
          <FormControl
            name='id'
            type='text'
            value={extendVCData.id}
            onChange={(e) => updateExtendBaseVC(e)}
          />
        </FormGroup>

        <div style={{ margin: '30px 0' }}>
          <p>
            <strong>Step 2:</strong>Upload Proof of Identification
          </p>
          <FormFile id='formcheck-api-regular'>
            <FormFile.Label>Proof of Identification</FormFile.Label>
            <FormFile.Input />
          </FormFile>
        </div>

        <Button onClick={(e) => issueDocumentPersonVC()}>Submit</Button>
      </div>
    </div>
  );
};

export default Application;
