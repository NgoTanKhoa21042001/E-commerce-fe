import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Alert,
  FormControl,
} from "react-bootstrap";
import "./Signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [login, { isError, isLoading, error }] = useLoginMutation();
  function handleLogin(e) {
    e.preventDefault();
    // login({ email, password });
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="login__form--container">
          <Form style={{ width: "100%" }}>
            <h1>Login to your account</h1>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <FormControl
                type="email"
                placeholder="Enter email"
                value=""
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <FormControl
                type="password"
                placeholder="Enter Password"
                value=""
                required
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account?<Link to="/signup">Create account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="login__image--container"></Col>
      </Row>
    </Container>
  );
};

export default Login;
