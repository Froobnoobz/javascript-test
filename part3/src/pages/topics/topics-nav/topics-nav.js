import React from "react";
import {TopicsList} from "../topics-list";

export function TopicsNav(props) {
  return TopicsList.map(topic => {
    let activeClass = props.currentTopic === topic.subPath ? "active" : "";
    return (
      <div className="topic-nav">
        <h2 
        onClick={() => {props.ChangeCurrentTopic(topic.subPath)}} 
        className={"topic-button " + activeClass}>
          {topic.sidebar}
        </h2>
      </div>
    );
});
}