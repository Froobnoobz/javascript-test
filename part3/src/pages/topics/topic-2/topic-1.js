import React from "react";
import BackgroundImage from "./home1-bg.svg";

export function TopicHome() {
  return(
    <div className="topic">
      <img className="background-image" alt="f" src={BackgroundImage}></img>
      <div className="topic-content">
        <button>Begin</button>
      </div>
    </div>
  );
}