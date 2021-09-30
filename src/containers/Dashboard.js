import React from "react";
import {Navbar} from "../components/Navbar";
import {Desktop} from "../views/Desktop";

export const Dashboard = props => {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Desktop/>
      </div>
    </>
  )
}