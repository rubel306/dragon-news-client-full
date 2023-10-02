import React from "react";
import "./SideBarAd.css";
import bg from "../../../../public/assets/bg.png";
import { Button } from "react-bootstrap";

const SideBarAd = () => {
  return (
    <div
      className="text-white p-5"
      style={{ backgroundImage: `url(${bg})`, textAlign: "center" }}
    >
      <h2 className="mb-4">Create an Amazing Newspaper</h2>
      <p>
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <Button variant="danger">Learn More</Button>
    </div>
  );
};

export default SideBarAd;
