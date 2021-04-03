import React from "react";
import { ProductList } from "../../ui/product-list/ProductList";
import { ProductListProps } from "../../ui/product-list/Interface";

interface ProductCatalogueProps {
  products: ProductListProps["products"];
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  products,
}) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
