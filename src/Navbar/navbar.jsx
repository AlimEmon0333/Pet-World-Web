import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="top_nav container-fluid d-flex justify-content-around">
      <div className="nav_logo ">Pet World</div>
      <div className="nav_buttons">
        <button className="signup">Sign up</button>
        <button className="login">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
