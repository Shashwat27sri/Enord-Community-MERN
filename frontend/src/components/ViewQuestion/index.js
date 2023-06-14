import React from "react";
import Sidebar from "../Enord/Sidebar";
import "../Enord/css/index.css";
import MainQuestion from "./MainQuestion";


function index() {

  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
}

export default index;
