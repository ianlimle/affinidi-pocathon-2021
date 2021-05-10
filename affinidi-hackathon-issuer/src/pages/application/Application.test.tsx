import React from 'react';
import {act, fireEvent, render} from '@testing-library/react';
import Issuer from 'pages/application/Application';
import {MemoryRouter} from 'react-router-dom';
import ApiService from 'utils/apiService';
import userEvent from '@testing-library/user-event'
import {unsignedDrivingLicenseVC} from 'utils/vc-data-examples/drivinglicense';
import { VCBuildUnsignedOutput } from 'utils/apis';

const getComponentElements = () => {
  const {getByRole, getByLabelText} = render(<MemoryRouter><Issuer/></MemoryRouter>)

  return {
    givenNameField: getByLabelText('Given Name:'),
    familyNameField: getByLabelText('Family Name:'),
    dateOfIssuanceField: getByLabelText('Date of Issuance:'),
    drivingLicenseIDField: getByLabelText('Driving License ID:'),
    drivingClassDropDown: getByLabelText('Driving Class:'),
    clearButton: getByRole('button', {name: 'Clear all fields'}),
    submitButton: getByRole('button', {name: 'Submit'})
  }
}

const givenName = 'Alex';
const familyName = 'Tan';
const dateofIssuance = '2019-09-09';
const drivingLicenseID = '00000000';

const unSignedVCOuput: VCBuildUnsignedOutput = {unsignedVC: unsignedDrivingLicenseVC};

describe('Issuance Component Test', () => {
    test('Component renders successfully', () => {
        const {
            givenNameField,
            familyNameField,
            dateOfIssuanceField,
            drivingLicenseIDField,
            drivingClassDropDown,
            clearButton,
            submitButton
        } = getComponentElements()
        
        expect(givenNameField).toBeInTheDocument();
        expect(familyNameField).toBeInTheDocument();
        expect(dateOfIssuanceField).toBeInTheDocument();
        expect(drivingLicenseIDField).toBeInTheDocument();
        expect(drivingClassDropDown).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })

    test('Input fields and validation', async () => {
      const {
        givenNameField,
        familyNameField,
        dateOfIssuanceField,
        drivingLicenseIDField,
        drivingClassDropDown,
        submitButton
      } = getComponentElements()

      jest.spyOn(window, 'alert').mockImplementation(() => {});
      jest.spyOn(ApiService, 'issueUnsignedVC').mockReturnValue(Promise.resolve(unSignedVCOuput))

      fireEvent.change(givenNameField, { target: { value: givenName } })
      fireEvent.change(familyNameField, { target: { value: familyName } })
      fireEvent.change(dateOfIssuanceField, { target: { value: dateofIssuance } })
      fireEvent.change(drivingLicenseIDField, { target: { value: drivingLicenseID } })
      fireEvent.change(drivingClassDropDown, { target: { value: '3' } })

      await act(async () => {
        await userEvent.click(submitButton)
      })

      expect(window.alert).toHaveBeenCalledWith(`You have successfully submitted your application. (Unsigned VC successfully created.)`)
    })

    test('Input fields and validation - Error', async () => {
      const { submitButton } = getComponentElements()

      jest.spyOn(window, 'alert').mockImplementation(() => {});
      jest.spyOn(ApiService, 'issueUnsignedVC').mockImplementation(() => {
        throw new Error();
      });

      await act(async () => {
        await userEvent.click(submitButton)
      })

      expect(window.alert).toHaveBeenCalledWith(`There has been an issue processing your request. Please check the browser console.`)
    })

    test('Clearing fields', async () => {
      const {
        givenNameField,
        familyNameField,
        dateOfIssuanceField,
        drivingLicenseIDField,
        drivingClassDropDown,
        clearButton
      } = getComponentElements()

      expect(givenNameField.value).toBe('')

      fireEvent.change(givenNameField, { target: { value: givenName } })
      fireEvent.change(familyNameField, { target: { value: familyName } })
      fireEvent.change(dateOfIssuanceField, { target: { value: dateofIssuance } })
      fireEvent.change(drivingLicenseIDField, { target: { value: drivingLicenseID } })
      fireEvent.change(drivingClassDropDown, { target: { value: '3' } })

      expect(givenNameField.value).toBe(givenName)

      await act(async () => {
        await userEvent.click(clearButton)
      })

      expect(givenNameField.value).toBe('')
    })
})