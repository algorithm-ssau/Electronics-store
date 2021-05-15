import React from "react";
import { Link } from "react-router-dom";
import { getNavigationLinkTo } from "../../utils/getNavigationLinkTo";

export const NavigationItems = () => {
  return (
    <nav>
      <ul>
        <li className="listItem">
          <Link to={getNavigationLinkTo("PAGE_LANDING")}>Начальная страница</Link>
        </li>
        <li className="listItem">
          <Link to={getNavigationLinkTo("PAGE_PRODUCT-CATALOGUE")}>Товары</Link>
        </li>
        <li className="listItem">
          <Link to={getNavigationLinkTo("PAGE_SHOPPING-CART")}>Корзина</Link>
        </li>
        <li className="listItem">
          <Link to={getNavigationLinkTo("PAGE_SIGN-UP-OR-SIGN-IN")}>Вход</Link>
        </li>
        <li className="listItem">
          <Link to={getNavigationLinkTo("PAGE_PROFILE")}>Профиль</Link>
        </li>
      </ul>
    </nav>
  );
};
