import React from "react";
import { BrowserRouter as Router,Rout,Routes,NavLink } from "react-router-dom";
import "./nav.css";
export function Nav(){
    return (
      <Router>
        <nav>
          <div className="link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Men</NavLink>
            <NavLink to="/">Women</NavLink>
            <NavLink to="/">
              logo
            </NavLink>
            <NavLink to="/">Kids</NavLink>
            <NavLink to="/">Skin</NavLink>
            <NavLink to="/">Outfits</NavLink>
          </div>
          <div className="icons">
           <button>qongiroq</button>
           <button>korzinka</button>
           <button>contak</button>
          </div>
        </nav>
      </Router>
    );
}