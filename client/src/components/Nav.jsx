import Auth from "../utils/auth";
import { Link } from "react-router-dom";
//import Home from "../pages/Home"; 
import React from "react";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul style={{ display: "flex", flexDirection: "row" }}>
          <li style={{ margin: "0 5px" }}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" style={{ textDecoration: "none", color: "black" }} onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul style={{ display: "flex", flexDirection: "row" }}>
          <li style={{ margin: "0 5px" }}>
            <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
              Signup
            </Link>
          </li>
          <li style={{ margin: "0 5px" }}>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header style={{ display: "flex", flexDirection: "row", padding: "0 10px" }}>
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
