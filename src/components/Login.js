import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input, Label, Form, Container } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../helpers";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const googleClientId = "YOUR_GOOGLE_CLIENT_ID";
const facebookAppId = "YOUR_FACEBOOK_APP_ID";

const Login = () => {
  const [user, setUser] = useState({ password: "", identifier: "" });
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = 'http://localhost:1337/api/auth/local';
    try {
      const { data } = await axios.post(url, user);
      storeUser(data);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;
      const { data } = await axios.post('YOUR_BACKEND_ENDPOINT/google', { tokenId });
      storeUser(data);
      toast.success("Logged in successfully with Google!");
      navigate("/");
    } catch (error) {
      console.error('Google login error:', error);
      toast.error("Google login failed.");
    }
  };

  const responseFacebook = async (response) => {
    try {
      const { accessToken } = response;
      const { data } = await axios.post('YOUR_BACKEND_ENDPOINT/facebook', { accessToken });
      storeUser(data);
      toast.success("Logged in successfully with Facebook!");
      navigate("/");
    } catch (error) {
      console.error('Facebook login error:', error);
      toast.error("Facebook login failed.");
    }
  };

  return (
    <Container className="login-container mt-5">
      <Row className="justify-content-center">
        <Col sm="12" md="6">
          <Form className="login-form">
            <h2 className="text-center">Login</h2>
            <FormGroup>
              <Label for="identifier">Email</Label>
              <Input
                type="email"
                name="identifier"
                id="identifier"
                value={user.identifier}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button color="success" block onClick={handleLogin}>Login</Button>
            <div className="text-center my-3">OR</div>
            <div className="social-login">
              <GoogleLogin
                clientId={googleClientId}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="w-100 mb-3"
              />
              <FacebookLogin
                appId={facebookAppId}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class w-100"
                icon="fa-facebook"
                className="mb-3"
              />
            </div>
            <div className="text-center mt-5">
              <Link to="/registration">Don't have an account? Sign up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
