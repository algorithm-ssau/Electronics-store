import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageProductCatalogue } from "./pages/page-product-catalogue/PageProductCatalogue";
import { Navigation } from "./ui/navigation/Navigation";
import { ShoppingCartPage } from "./pages/page-shopping-cart/ShoppingCartPage";
import { User } from "./pages/page-profile/User";
import { SignUpOrIn } from "./pages/page-sign-in-or-up/Registration";
import { ErrorPage } from "./pages/page-404/ErrorPage";
import { Landing } from "./pages/page-landing/Landing";

process.title = "EStoreClient";

export const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/products">
          <PageProductCatalogue />
        </Route>
        <Route path="/shoppingCart">
          <ShoppingCartPage />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/signUpOrIn">
          <SignUpOrIn />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};
