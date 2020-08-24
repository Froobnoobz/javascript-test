import React from "react";
import {Home} from "../../pages/home/home"
import {TopicsPage} from "../../pages/topics/topics"
import {Topic1} from "../../pages/topics/topic-home/topic-home";

export const Routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home></Home>
  },
  {
    path: "/topics",
    exact: false,
    sidebar: () => <div>Topics</div>,
    main: () => <TopicsPage></TopicsPage>
  }
];