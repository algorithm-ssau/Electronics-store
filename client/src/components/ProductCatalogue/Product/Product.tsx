import React from 'react'
import {IProduct} from "./Interface";

export const Product: React.FC<IProduct> = (props) => {
    const {img, name, price} = props;
    return (<div className='productBorder'>
        <img className='productImage' alt={"SomeImage"} src={img}/>
        <section>
            <h3>
                {name}
            </h3>
            <h3>
                ${price}
            </h3>
        </section>
    </div>)
}