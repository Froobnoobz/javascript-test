import React from "react";
import "./home.scss";
import Globe from "./images/globe.png";
import Logo from "./images/logo.png";
import {FaRegHandPointRight} from 'react-icons/fa';

export class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id="home-container">
          <div id="get-started-container">
            <h2 id="header-text">LOREM IPSUM</h2>
            <img id="logo-image" alt="logo" src={Logo}></img>
            <span id="get-started-text"><FaRegHandPointRight></FaRegHandPointRight> Click begin to sget started.</span>
          </div>
          <img id="globe-image" alt="globe" src={Globe}></img>
        </div>
      );
    }
  }