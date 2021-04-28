import React from "react";
import { Link } from "react-router-dom";

export const NavigationItems = () => {
  return (
    <nav>
      <ul>
        <li className="listItem">
          <Link to="/">Products</Link>
        </li>
        <li className="listItem">
          <Link to="/User">User Profile</Link>
        </li>
        <li className="listItem">
          <Link to="/Register">Register</Link>
        </li>
        <li className="listItem">
          <Link to="/ShoppingCart">Shopping cart</Link>
        </li>
      </ul>
    </nav>
  );
};
