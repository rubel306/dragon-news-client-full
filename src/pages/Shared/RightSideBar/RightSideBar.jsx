import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import "./RightSideBar.css";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import SideBarAd from "../SideBarAd/SideBarAd";

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <div className="login-btn-group mb-4">
        <h3>Login With</h3>
        <Button variant="outline-primary" className="w-full mb-2">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-primary" className="w-full">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </div>
      <div className="find-us w-full">
        <h3>Find Us On: </h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <SideBarAd></SideBarAd>
    </div>
  );
};

export default RightSideBar;
