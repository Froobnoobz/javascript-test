import React from "react";
import {Home} from "../../pages/home/home"
import {TopicsPage} from "../../pages/topics/topics"
import {TopicHome} from "../../pages/topics/topic-home/topic-home"
import {Topic1} from "../../pages/topics/topic-1/topic-1";
import {Topic2} from "../../pages/topics/topic-2/topic-2";
import {Topic3} from "../../pages/topics/topic-3/topic-3";
import {Topic4} from "../../pages/topics/topic-4/topic-4";
import {Topic5} from "../../pages/topics/topic-5/topic-5";

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