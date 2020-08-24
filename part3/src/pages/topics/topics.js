import React from "react";
import "./topics.scss";
import {TopicHome} from "./topic-home/topic-home";
import {Topic1} from "./topic-1/topic-1";
import {Topic2} from "./topic-2/topic-2";
import {Topic3} from "./topic-3/topic-3";
import {Topic4} from "./topic-4/topic-4";
import {Topic5} from "./topic-5/topic-5";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

let topics = [
  {
    path: "/topics/topic-home",
    exact: true,
    sidebar: "Home",
    main: () => <TopicHome></TopicHome>
  },
  {
    path: "/topics/topic-1",
    exact: true,
    sidebar: "Topic 1",
    main: () => <Topic1></Topic1>
  },
  {
    path: "/topics/topic-2",
    exact: true,
    sidebar: "Topic 2",
    main: () => <Topic2></Topic2>
  },
  {
    path: "/topics/topic-3",
    exact: true,
    sidebar: "Topic 3",
    main: () => <Topic3></Topic3>
  },
  {
    path: "/topics/topic-4",
    exact: true,
    sidebar: "Topic 4",
    main: () => <Topic4></Topic4>
  },
  {
    path: "/topics/topic-5",
    exact: true,
    sidebar: "Topic 5",
    main: () => <Topic5></Topic5>
  }
];

export function TopicsPage() {

    let path = useRouteMatch();

    return (
      <div id="topics-page-container">
        {/* <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${path.url}/topic-home`}>Rendering with React</Link>
          </li>
        </ul> */}
        <Router>
          <Switch>
            {topics.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Router>
        <div id="gradient-nav-bar">
          {topics.map(topic => <h2 className="topic-button">{topic.sidebar}</h2>)}
        </div>
      </div>
    );
    
  }