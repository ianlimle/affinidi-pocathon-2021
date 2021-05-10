import React from 'react';
import {render} from '@testing-library/react';
import Issuer from 'pages/issuer/Issuer';
import {MemoryRouter} from 'react-router-dom';

const docData = { 
    applicationID: 'mockApplicationID',
    approved: false,
    username: 'mockUsername',
    payload: {}
};

const mockData: any[] = [
    {
        id: 'mockDocID',
        data: () => docData
    },
    {
        id: 'mockDocID2',
        data: () => docData
    }
]

jest.mock('firebase', () => {
    return {
        initializeApp: jest.fn().mockImplementation(() => {}),
        firestore: jest.fn().mockImplementation(() => {
            return {
                collection: jest.fn().mockImplementation(() => {
                    return {
                        get: jest.fn().mockImplementation(() => {
                            return {
                                docs: mockData
                            }
                        })
                    }
                })
            }
        })
    }
});

describe('Issuance Component Test', () => {
    test.skip('Component renders successfully (With applications)', () => {
        const {getByText} = render(<MemoryRouter><Issuer/></MemoryRouter>)

        expect(getByText('Pending Approval')).toBeInTheDocument();
        expect(getByText('No Pending Approvals')).not.toBeInTheDocument();
        expect(getByText('Approved Applications')).toBeInTheDocument();
        expect(getByText('No Approved Applications')).not.toBeInTheDocument();
    })

    test('Component renders successfully (With no applications)', () => {
        jest.clearAllMocks();
        const {getByText} = render(<MemoryRouter><Issuer/></MemoryRouter>)

        expect(getByText('Pending Approval')).toBeInTheDocument();
        expect(getByText('No Pending Approvals')).toBeInTheDocument();
        expect(getByText('Approved Applications')).toBeInTheDocument();
        expect(getByText('No Approved Applications')).toBeInTheDocument();
    })
})