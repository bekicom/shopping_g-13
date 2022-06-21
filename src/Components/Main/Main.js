import React from "react";
import { Home } from "../../Pages/Home/Home";
import { Nav } from "../../Pages/Nav/Nav";

export function Main()  {
  return (
    <div className="Main">
        <Nav/>
    <Home/>
    </div>
  );
}