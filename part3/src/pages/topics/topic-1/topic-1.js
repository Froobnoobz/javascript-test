import React from "react";
import BackgroundImage from "./home1-bg.svg";

export function Topic1() {
  return(
    <div className="topic">
      <img className="background-image" alt="f" src={BackgroundImage}></img>
      <div className="topic-content">
        <button>1</button>
      </div>
    </div>
  );
}