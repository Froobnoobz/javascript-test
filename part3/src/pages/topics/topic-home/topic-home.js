import React from "react";
import BackgroundImage from "./home1-bg.svg";
import Logo from "../../../images/logo.png";

export function TopicHome(props) {
  return(
    <div className="topic">
      <div className="topic-content">
        <img className="logo-small" alt="logo" src={Logo}></img>
        <h1 className="header-text">
          LOREM IPSUM DOLOR SIT
        </h1>
        <button onClick={() => {props.ChangeCurrentTopic("topic-1")}} className="begin-button">Begin</button>
      </div>
      <img className="background-image" alt="background" src={BackgroundImage}></img>
    </div>
  );
}