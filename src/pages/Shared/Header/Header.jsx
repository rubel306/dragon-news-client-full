import React from "react";
import HeaderNavbar from "../Navbar/HeaderNavbar";
import logo from "../../../../public/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM, D, YYYY ")}</p>
      </div>
      <HeaderNavbar></HeaderNavbar>
    </div>
  );
};

export default Header;
