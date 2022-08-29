import React from "react";
import { Link, useLocation } from "react-router-dom";
import marvelImage from "assets/marvel-logo.png";
import leftArrow from "assets/left-arrow.png";
import "./index.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      {pathname !== "/" && (
        <Link to="/">
          <img
            src={leftArrow}
            className="backArrow"
            alt="back"
            title="Back to the list"
          />
        </Link>
      )}
      <img src={marvelImage} alt="Marvel" />
    </nav>
  );
};

export default Header;
