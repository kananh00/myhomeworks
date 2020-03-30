import React, { useContext } from 'react';
import './styles.sass';
import { IoIosCloseCircle } from "react-icons/io";
import { Layout } from '../../commons';

import { CartContext } from '../../context/cart'

export const Cart = () => {

    const { cartProducts, removeFromCart } = useContext(CartContext);

    return (
        <Layout>
            <h1>Cart</h1>
            {cartProducts.map(({ id, name, artist, price, image, uniqLocalId }) => (
                <div className = "product_cart_name">
                    <img src={image} alt={name} />
                    <h5>{name}</h5>
                    <h5 style = {{color: 'grey'}}>{artist}</h5>
                    <h4>${price}</h4>
                    <button className = "close_btn"
                            onClick={() => removeFromCart(uniqLocalId)}
                        ><IoIosCloseCircle/></button>
                </div>
            ))}
        </Layout>
    )
}
