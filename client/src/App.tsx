import React from 'react';

import { ProductCatalogue } from './pages/product-catalogue/ProductCatalogue';
import { productsMockData } from './ui/product-list/ProductsMockData';

export const App: React.FC = () => (
  // todo add router
  // todo add state storage (Redux)
  <div className="App">
    <ProductCatalogue products={productsMockData} />
  </div>
);

// В корзину, товар, страницу пользователя, на страницу входа/регистрации
