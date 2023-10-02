import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Header></Header>
          <Col lg={3}>Left sidebar </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>Right sidebar</Col>
          <Footer></Footer>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
