import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageProductCatalogue } from "./pages/product-catalogue/PageProductCatalogue";
import { Navigation } from "./ui/navigation/Navigation";
import { ShoppingCartPage } from "./pages/shopping-cart/ShoppingCartPage";
import { User } from "./pages/user/User";
import { Registration } from "./pages/registration/Registration";
import { ErrorPage } from "./pages/error-page/ErrorPage";

process.title = "EStoreClient";

export const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <PageProductCatalogue />
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCartPage />
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
