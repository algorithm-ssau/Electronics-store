import React from 'react';
import { ProductListProps } from './Interface';
import { IProduct, Product } from '../product/Product';

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { products } = props;
  return (
    <div>
      <h2>Каталог товаров</h2>
      <div className="product">
        {products.map((product: IProduct) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
