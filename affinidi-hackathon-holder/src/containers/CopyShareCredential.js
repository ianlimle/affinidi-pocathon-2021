import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CopyShareCredential = (props) => {
  const [url, setUrl] = useState('');
  const history = useHistory();

  const CopyFunc = () => {
    navigator.clipboard.writeText(url);
    history.push('/');
  };

  useEffect(() => {
    axios
      .post('http://localhost:4000/api/credential/save_res_token', {
        token: props.location.state.credentialShareResponseToken,
      })
      .then(
        (response) => {
          setUrl(response.data.return_url);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className='ShareCred'>
      <div className='Form container'>
        <h1 className='Title'>Copy your token</h1>
        <Button onClick={CopyFunc}>
          Click here to copy shareable link to your verifier
        </Button>
      </div>
    </div>
  );
};

export default CopyShareCredential;
