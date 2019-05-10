import React from 'react';
import { FormGroup, Form, FormLabel,FormControl,FormText,FormCheck} from 'react-bootstrap';
import { Button,Input, Tooltip, Icon,Checkbox } from 'antd';

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.css'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function Login() {
  return (
    <div className="Form">
      
      <Form>
    <FormGroup controlId="formBasicEmail">
    <FormLabel>Username</FormLabel>
    <Input
    placeholder="Enter your username"
    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    suffix={
      <Tooltip title="We'll never share your email with anyone else.">
        <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
      </Tooltip>
    }
    />
  </FormGroup>

  <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <Input.Password placeholder="input password" />
  </FormGroup>

  <p align='center'>
  <Button type="primary" block >
   SignIn
  </Button>
  <FormGroup controlId="formBasicChecbox">
    <Checkbox onChange={onChange} className="text-muted"> 
    Remember Password
    </Checkbox>
  </FormGroup>
  </p>
  
</Form>
    
    </div>
  );
}

export default Login;
