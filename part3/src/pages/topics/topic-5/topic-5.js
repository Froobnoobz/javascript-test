import React from "react";
import BackgroundImage from "./home3-bg.svg";
import {SimpleAccordion} from "../../../components/collapse/simple-accordion";
import {TopicsList} from "./topics-list";
import "./topic-5.scss";

/**
 * I regret not making this a bit more DRY
 * Have to admit I ran abit out of time to properly reuse the main topic css
 * So in the scss file for topic-5 there is a alot of reuse
 */
export function Topic5() {
  return(
    <div className="topic-5">
      <img className="background-image" alt="background" src={BackgroundImage}></img>
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
          {/* Topics are stored in a seperate array for cleanliness */}
          {TopicsList.map(topic => <SimpleAccordion topic={topic}></SimpleAccordion>)}
        </div>
      </div>
    </div>
  );
}