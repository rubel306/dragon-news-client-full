import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightSideBar from "../pages/Shared/RightSideBar/RightSideBar";
import Footer from "../pages/Shared/Footer/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Header></Header>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSideBar></RightSideBar>
          </Col>
          <Footer></Footer>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
