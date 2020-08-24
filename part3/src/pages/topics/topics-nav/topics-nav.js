import React from "react";
import {TopicsList} from "../topics-list";
import {HiChevronRight} from 'react-icons/hi';
import {HiChevronLeft} from 'react-icons/hi';
import "./topics-nav.scss";

export function TopicsNav(props) {
  if(props.currentTopic !== "topic-5")
  {
    return TopicsList.map(topic => {
      let activeClass = props.currentTopic === topic.subPath ? "active" : "";
        return (
          <div className="topic-nav" onClick={() => {props.ChangeCurrentTopic(topic.subPath)}}>
            <h2 
            className={"topic-button " + activeClass}>
              {topic.sidebar}
            </h2>
          </div>
        );
    });
  }
  
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

