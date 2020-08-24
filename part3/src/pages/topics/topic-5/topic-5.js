import React from "react";
import BackgroundImage from "./home3-bg.svg";
import {SimpleAccordion} from "../../../components/collapse/simple-accordion";
import {Topics} from "./topics";
import "./topic-5.scss";


export function Topic5() {
  return(
    <div className="topic-5">
      <img className="background-image" alt="f" src={BackgroundImage}></img>
      <div className="topic-content">
        <article>
          <h1 className="header-text">Nulla imperdiet</h1>
          <p className="content-text">
          Vestibulum dapibus hendrerit nibh ut ornare.
          </p>
          <p className="quote-highlight">Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.</p>
        </article>
      </div>
      <div className="topic-accordion">
        <div className="accordions">
          {Topics.map(topic => <SimpleAccordion topic={topic}></SimpleAccordion>)}
        </div>
      </div>
    </div>
  );
}