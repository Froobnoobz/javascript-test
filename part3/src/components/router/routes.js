import React from "react";
import {Home} from "../../pages/home/home"

export const Routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home></Home>
  }
];