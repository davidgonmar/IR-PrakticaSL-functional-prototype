import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import FormGenerator from '../../components/formGenerator/formGenerator';
import tokenService from '../../services/token.service';
import '../../static/css/auth/authButton.css';
import { loginFormInputs } from './form/loginFormInputs';
import { useAuth } from '../../App';

export default function Login() {
  const [message, setMessage] = useState(null);
  const loginFormRef = React.createRef();
  const auth = useAuth();

  async function handleSubmit({ values }) {
    try {
      auth.login({
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className='auth-page-container'>
      {message ? <Alert color='primary'>{message}</Alert> : <></>}

      <h1>Login</h1>

      <div className='auth-form-container'>
        <FormGenerator
          ref={loginFormRef}
          inputs={loginFormInputs}
          onSubmit={handleSubmit}
          numberOfColumns={1}
          listenEnterKey
          buttonText='Login'
          buttonClassName='auth-button'
        />
      </div>
    </div>
  );
}
