import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const LoginLayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Header></Header>
          <Col lg={12}>
            <Outlet></Outlet>
          </Col>
          <Footer></Footer>
        </Row>
      </Container>
    </div>
  );
};

export default LoginLayout;
