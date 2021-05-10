import React from 'react';
import IssuerLogin from 'components/user/issuer/login/Login';

const IssuerLoginPage: React.FC = (): React.ReactElement => {
    return (
      <div className='page-form page-form--slim'>
        <h1 className='title'>Issuer Login</h1>
        <p>Log in to continue.</p>
        <IssuerLogin/>
      </div>
    )
}

export default IssuerLoginPage;