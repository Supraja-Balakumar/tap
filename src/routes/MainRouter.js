import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApprovalLevelTableView from "../views/ApprovalLevelTableView";
import Navbar5View from "../views/Navbar5View";


const MainRouter = () => {
  return (
    <Router>
      <Navbar5View />
      <Routes>
        {/* <Route path="/" element={<ExampleView />} /> */}
        <Route path="/" element={<ApprovalLevelTableView />} />

      </Routes>
    </Router>
  );
};

export default MainRouter;
