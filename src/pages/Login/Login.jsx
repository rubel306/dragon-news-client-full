import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login bg-white w-75 p-5 border mx-auto">
      <h2 className="text-center">Login your account</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="dark" size="lg">
            Log In
          </Button>
        </div>
      </Form>
      <p className="mt-4">
        Dont’t Have An Account ? <Link to="/registration">Register</Link>
      </p>
    </div>
  );
};

export default Login;
