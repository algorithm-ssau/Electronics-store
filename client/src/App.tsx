import React from "react"

import { ProductCatalogue } from "./pages/product-catalogue/ProductCatalogue"


export const App: React.FC = () => {
// todo add router
// todo add state storage (Redux)
  return (
    <div className="App">
      <ProductCatalogue/>
    </div>
  )
}
// В корзину, товар, страницу пользователя, на страницу входа/регистрации