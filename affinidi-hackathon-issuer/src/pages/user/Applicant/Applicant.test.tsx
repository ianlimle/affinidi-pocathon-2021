import React from 'react';
import {render} from '@testing-library/react';
import ApplicantLoginPage from 'pages/user/Applicant/Applicant';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('User Page test', () => {
  test('Page renders with login', () => {
    const {getByText} = render(<MemoryRouter><ApplicantLoginPage/></MemoryRouter>)

    const title = getByText('Applicant Login');
    const info1 = getByText('Please log in using Affindi Wallet\'s credentials.')
    const smallInfo = getByText('Don\'t have an Affinidi Wallet account?')
    const signUpButton = getByText('Sign up here')
    
    expect(title).toBeInTheDocument()
    expect(info1).toBeInTheDocument()
    expect(smallInfo).toBeInTheDocument()
    expect(signUpButton).toBeInTheDocument()
  })

  test('Page renders with signup', () => {
    const {getByText} = render(<MemoryRouter><ApplicantLoginPage/></MemoryRouter>)

    const signUpButton = getByText('Sign up here')
    userEvent.click(signUpButton)

    const title = getByText('Create Affinidi Wallet account');
    const info1 = getByText('Welcome to your personal wallet. Here you will be able to store, view and manage your digital identity.')
    const info2 = getByText('In order to access your wallet you will need to set up a password first')
    
    expect(title).toBeInTheDocument()
    expect(info1).toBeInTheDocument()
    expect(info2).toBeInTheDocument()
  })

  test('Page renders login, goes to signup back to login', () => {
    const {getByText} = render(<MemoryRouter><ApplicantLoginPage/></MemoryRouter>)

    const signUpButton = getByText('Sign up here')
    userEvent.click(signUpButton)

    const loginButton = getByText('Log in here')
    userEvent.click(loginButton)

    const title = getByText('Applicant Login');
    expect(title).toBeInTheDocument()
  })
})
