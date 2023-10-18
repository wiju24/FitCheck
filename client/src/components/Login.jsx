import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import App from './App';

import Auth from '../utils/auth';
import {useMutation} from '@apollo/react-hooks';
import {LOGIN_USER} from '../utils/mutation'

// --- Importing Login Forum from Bootstrap --- //
import Form from 'react-bootstrap/Form';

const Login = () =>  {
    const [userFormData, setUserFormData] = useState({email: '', password: ''})
    const [validated] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [loginUser, {error}] = useMutation(LOGIN_USER)
}



function FormGroupExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default FormGroupExample;
