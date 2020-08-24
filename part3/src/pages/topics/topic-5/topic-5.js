import React from "react";
import BackgroundImage from "./home1-bg.svg";
import Logo from "../../../images/logo.png";

export function Topic5() {
  return(
    <div className="topic">
      <img className="background-image" alt="f" src={BackgroundImage}></img>
      <div className="topic-content large">
        <img className="logo-large" alt="logo" src={Logo}></img>
        <article>
          <h1 className="header-text">TOPIC 5</h1>
          <p className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit. 
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper. 
          <br /><br />
          Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. 
          Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus. 
          <br /><br />
          Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. 
          Ut eleifend sit amet justo eu laoreet.
          </p>
        </article>
      </div>
    </div>
  );
}