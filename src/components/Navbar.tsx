import React from "react";
import "./Navbar.css";
import deleteIcon from "../images/delete-icon.png";
import subtractIcon from "../images/subtract-icon.png"
import 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar_icons">
        <div>
          <img
            src={deleteIcon}
            alt="delete"
            className="close_icon"
          />
        </div>
        <div>
          <img
            src={subtractIcon}
            alt="subtract"
            className="subtract_icon"
          />
        </div>
        <div>
          <img
            src="./images/expand-icon.png"
            alt="expand"
            className="full_screen_icon"
          />
        </div>
        <div className="navbar_name">
          <h1>Nyunt Sein</h1>
          <img src="" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
