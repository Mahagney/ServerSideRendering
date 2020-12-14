import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";

export default [
  {
    path: "/",
    ...HomePage,
    exact: true,
  },
  {
    loadData,
    path: "/users",
    ...UsersListPage,
  },
];
