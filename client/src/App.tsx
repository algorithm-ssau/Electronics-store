import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductCatalogue } from "./pages/product-catalogue/ProductCatalogue";
import { productsMockData } from "./mocks/ProductsMockData";
import { Navigation } from "./ui/navigation/Navigation";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";
import { User } from "./pages/user/User";
import { Registration } from "./pages/registration/Registration";
import { ErrorPage } from "./pages/error-page/ErrorPage";

export const App: React.FC = () => {
  // todo add state storage (Redux)
  // todo separate user and register in a smart way
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <ProductCatalogue products={productsMockData} />
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCart />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Route path="/Register">
          <Registration />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

// В корзину, товар, страницу пользователя, на страницу входа/регистрации
