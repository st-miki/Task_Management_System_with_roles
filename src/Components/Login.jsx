import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Contexts/AuthContext'; // Commenting out the API call for now
import '../Styles/Login.css'; // Importing external stylesheet

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth(); // Commenting out the API call for now
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // You can access email and password from the form values
      const { email, password } = values;
      // Perform login API call if uncommented
      // await login(emailRef.current.value, passwordRef.current.value); // Commenting out the API call for now
      // Redirect to dashboard on successful login
      navigate('/');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };
  
 
    
  return (
    <div className='login-background'>
    <div className="login-container">
      <h2>Login</h2>
      <Form onFinish={handleSubmit} className="login-form">
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input ref={emailRef} placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password ref={passwordRef} placeholder="Password" size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn" size="large">
            Log In
          </Button>
        </Form.Item>
      </Form>
      <div className="signup-link">
        Need an account? <Link to="/signup" style={{textDecoration: 'none'}}><span style={{color:'white'}}>Sign Up</span></Link>
      </div>
    </div>
    </div>
  );
}

export default Login;
