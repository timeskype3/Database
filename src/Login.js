import React from 'react';
import { FormGroup, Form, FormLabel,FormControl,FormText,FormCheck} from 'react-bootstrap';
import  ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css'
function Login() {
  return (
    <div className="Form">
      
      <Form>
    <FormGroup controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>

  <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl type="password" placeholder="Password" />
  </FormGroup>
 
  <FormGroup controlId="formBasicChecbox">
  
    <FormCheck className="text-small" type="checkbox"  label="remember password" />
  </FormGroup>
  <p align='center'>
  <Button variant="primary" type="submit">
   SignIn
  </Button>
  </p>
</Form>
      
    </div>
  );
}

export default Login;
