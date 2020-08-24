import React from "react";
import {TopicsList} from "../topics-list";
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';
import {HiHome} from 'react-icons/hi';
import "./topics-nav.scss";

// TO-DO - not sure if this was the best way to handle the topic 1-4 and 5 nav bar split
// Right now it has code smell because I definately thought of part 5 after 1-4
export function TopicsNav(props) {

  // if not topic 5 - map over the topics and render a flex div with the topic name
  if(props.currentTopic !== "topic-5")
  {
    // Topics list is stored in a seperate file for neatness
    return TopicsList.map(topic => {
      let activeClass = props.currentTopic === topic.subPath ? "active" : "";
        return (
          <div key={topic.sidebar} className="topic-nav" onClick={() => {props.ChangeCurrentTopic(topic.subPath)}}>
            <h2 
            className={"topic-button " + activeClass}>
              {topic.subPath === "topic-home" ? <HiHome></HiHome> : <span></span>}
              {topic.sidebar}
            </h2>
          </div>
        );
    });
  }
  
  // Else we render the topic 5 nav bar
  // No else required since the initial if has a return statement
  return (
    <div className="topic-5-nav">
      <div className="left" onClick={() => {props.ChangeCurrentTopic("topic-4")}}>
        <div className="nav-icon"><HiChevronLeft></HiChevronLeft></div>
        <span>Back</span>
      </div>
      <div className="right">
        <a href="/">
          <div className="nav-icon"><HiChevronRight></HiChevronRight></div>
          <span>Next</span>
        </a>
      </div>
    </div>
  );
}

