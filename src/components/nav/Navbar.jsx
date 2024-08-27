import React from "react";
import signature from "../../assets/signature.webp";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={signature} alt="Yenjav Logo and signature" />
      </div>
    </div>
  );
};

export default Navbar;
