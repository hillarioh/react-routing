import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-Links">
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
