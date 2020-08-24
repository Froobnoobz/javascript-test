import React from "react";
import {Home} from "../../pages/home/home"
import {TopicsPage} from "../../pages/topics/topics"

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