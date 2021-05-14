import React from "react";
import { Link } from "react-router-dom";

export const NavigationItems = () => {
  return (
    <nav>
      <ul>
        <li className="listItem">
          <Link to="/">Начальная страница</Link>
        </li>
        <li className="listItem">
          <Link to="/Products">Товары</Link>
        </li>
        <li className="listItem">
          <Link to="/ShoppingCart">Корзина</Link>
        </li>
        <li className="listItem">
          <Link to="/SignUpOrIn">Вход</Link>
        </li>
        <li className="listItem">
          <Link to="/User">Профиль</Link>
        </li>
      </ul>
    </nav>
  );
};
