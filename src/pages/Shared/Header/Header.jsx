import React from "react";
import HeaderNavbar from "../Navbar/HeaderNavbar";
import logo from "../../../../public/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className="mb-0 mt-4">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM, D, YYYY ")}</p>
      </div>

      <div className="news-ticker d-flex align-items-center">
        <Button variant="danger">Latest</Button>
        <Marquee>
          <p className="mb-0">
            I can be a React component, multiple React components, or just some
            text...... I can be a React component, multiple React components, or
            just some text...... I can be a React component, multiple React
            components, or just some text...... I can be a React component,
            multiple React components, or just some text......
          </p>
        </Marquee>
      </div>
      <HeaderNavbar></HeaderNavbar>
    </div>
  );
};

export default Header;
