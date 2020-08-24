import React from "react";
import "./topics.scss";
import {TopicHome} from "./topic-home/topic-home";
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
    sidebar: "Topic 1",
    main: () => <TopicHome></TopicHome>
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
          {}
          <h2 className="topic-button">Home</h2>
          <h2>Topic 1</h2>
          <h2>Topic 2</h2>
          <h2>Topic 3</h2>
          <h2>Topic 4</h2>
          <h2>Topic 5</h2>
        </div>
      </div>
    );
    
  }