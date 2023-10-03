import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("User info: ", name, email, password);
  };
  return (
    <div className="login bg-white w-75 p-5 border mx-auto">
      <h2 className="text-center">Register your account</h2>
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>
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
            Register
          </Button>
        </div>
      </Form>
      <p className="mt-4">
        Already Have An Account ? Please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Registration;
