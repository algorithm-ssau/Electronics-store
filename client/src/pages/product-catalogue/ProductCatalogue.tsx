import React from "react";
import { ProductList } from "../../ui/product-list/ProductList";
import { Navigation } from "../../ui/navigation/Navigation";
import { testData } from "../../ui/product-list/TestData";


export const ProductCatalogue: React.FC = () => {
  return <div>
    <Navigation />
    <ProductList products={testData} />
  </div>;
};