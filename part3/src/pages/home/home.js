import React from "react";import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";

import AudioPlayer from "./audio-player/audio-player";
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
            <Link to="/topics/topic-home">
              <span id="get-started-text">
                <FaRegHandPointRight className="get-started-icon"></FaRegHandPointRight> 
                <span>Click begin to get started.</span>
              </span>
            </Link>
          </div>
          <AudioPlayer></AudioPlayer>
          <img id="globe-image" alt="globe" src={Globe}></img>
        </div>
      );
    }
  }