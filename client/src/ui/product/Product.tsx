import React from 'react';
import { logger } from '../../utils/logger';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  img: string;
}

export const Product: React.FC<IProduct> = (props) => {
  const { img, name, price } = props;
  return (
    <div className="productBorder">
      <img className="productImage" alt="SomeImage" src={img} />
      <section>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </section>
      <button
        type="button"
        onClick={() => {
          logger.log(`Покупается ${name} за ${price}`);
        }}
      >
        Купить
      </button>
    </div>
  );
};
