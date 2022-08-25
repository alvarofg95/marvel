import React from "react";
import Home from "../pages/home";
import Detail from "../pages/comic";

export default [
  {
    hashPath: "/",
    key: "home",
    exact: true,
    component: <Home />,
  },
  {
    hashPath: "/comic/:id",
    key: "comic",
    exact: false,
    component: <Detail />,
  },
];
