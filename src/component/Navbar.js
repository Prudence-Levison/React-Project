import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import Profile from "./Profile";

import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
 

  return (
    <>
    <header>
      <h3>Logo</h3>
      <div className="nav-links">
        <NavLink to="/profile" exact={true} className="link"> Profile</NavLink>
        <NavLink to="/ordersummary" exact={true} className="link"> Order Summary</NavLink>
      </div>
    </header>
    
    </>
  );
}
