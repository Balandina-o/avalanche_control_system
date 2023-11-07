import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Main</h1>
      <NavLink to="/edit">Go to edit</NavLink>
    </div>
  );
};

export default MainPage;
