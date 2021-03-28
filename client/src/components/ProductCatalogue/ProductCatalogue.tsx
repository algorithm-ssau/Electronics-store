import React from 'react'
import {IProductCatalogue} from "./Interface";
import {Product} from "./Product/Product";
import {IProduct} from "./Product/Interface";

export const ProductCatalogue: React.FC<IProductCatalogue> = (props) => {
    const {products} = props;
    return <div>
        <h2>
            Каталог товаров
        </h2>
        <div className='product'>
            {products.map((product: IProduct) => {
                return <Product key={product.id} {...product}/>
            })}
        </div>
    </div>
}