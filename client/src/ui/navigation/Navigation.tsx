import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="header">
      <div className="logoShop">
        <h1>Магазин электроники</h1>
      </div>
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
    </div>
  );
};
