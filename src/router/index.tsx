import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import CreateTask from "../screens/CreateTask";
import EditTask from "../screens/EditTask";

function Router() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/CreateTask`} element={<CreateTask />} />
          <Route path={`/EditTask`} element={<EditTask />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Router;
