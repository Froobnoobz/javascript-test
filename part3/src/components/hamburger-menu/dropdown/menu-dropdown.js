import React from "react";
import {
  Link
} from "react-router-dom";
import "./menu-dropdown.scss";

export function MenuDropdown () {
  return (
    <div id="hamburger-menu-dropdown">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/topics">
        <span>Topics</span>
      </Link>
    </div>
  );
}