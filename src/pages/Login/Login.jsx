import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //user sign/login function

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log("User Logged in successfully", loggedUser.email);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login bg-white w-75 p-5 border mx-auto">
      <h2 className="text-center">Login your account</h2>
      <Form onSubmit={handleLogin}>
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
          <Button type="submit" variant="dark" size="lg">
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
