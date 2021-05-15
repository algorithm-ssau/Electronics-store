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
          <Link to="/products">Товары</Link>
        </li>
        <li className="listItem">
          <Link to="/shoppingCart">Корзина</Link>
        </li>
        <li className="listItem">
          <Link to="/signUpOrIn">Вход</Link>
        </li>
        <li className="listItem">
          <Link to="/user">Профиль</Link>
        </li>
      </ul>
    </nav>
  );
};
