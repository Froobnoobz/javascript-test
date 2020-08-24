import React from "react";
import "./topics.scss";

import {TopicHome} from "./topic-home/topic-home";
import {Topic1} from "./topic-1/topic-1";
import {Topic2} from "./topic-2/topic-2";
import {Topic3} from "./topic-3/topic-3";
import {Topic4} from "./topic-4/topic-4";
import {Topic5} from "./topic-5/topic-5";

import {TopicsList} from "./topics-list";
import {Routes} from "../../components/router/routes";
import {TopicsNav} from "./topics-nav/topics-nav"
import {
  BrowserRouter as Router,
  BrowserRouter as useRouteMatch,
  Switch,
  Route
} from "react-router-dom";


export class TopicsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTopic: "topic-home"
    }
  }

  RenderCurrentTopic = () => {
    switch(this.state.currentTopic) {
      case "topic-home" : return <TopicHome></TopicHome>;
      case "topic-1" : return <Topic1></Topic1>;
      case "topic-2" : return <Topic2></Topic2>;
      case "topic-3" : return <Topic3></Topic3>;
      case "topic-4" : return <Topic4></Topic4>;
      case "topic-5" : return <Topic5></Topic5>;

      default: return;
    }
  }

  ChangeCurrentTopic = (topic) => {
    this.setState({
      currentTopic: topic
    });
  }

  render() {
    return (
      <div id="topics-page-container">
        {this.RenderCurrentTopic()}
        <div id="gradient-nav-bar">
          <TopicsNav ChangeCurrentTopic={this.ChangeCurrentTopic} currentTopic={this.state.currentTopic}></TopicsNav>
        </div>
      </div>
    );
  } 
}