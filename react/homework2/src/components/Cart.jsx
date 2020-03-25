import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";


export const Cart = ({ cart, setCart }) => {

    const removeFromCart = (id, count) => {
        if (count > 1) {
            setCart(cart => cart.map(item2 => {
                if (item2.id === id) {
                    return {
                        ...item2,
                        count: item2.count - 1
                    }
                }
                return item2
            }))
        } else {
            setCart(cart => cart.filter(item2 => item2.id !== id))
        }
    }

    return (
        <div className="cart">
            <h2 className = "shop_card">Your Card <p className = "logo"><TiShoppingCart/></p></h2>
        
            {cart.map(({ name, cost, photo, id, count }) => (
              
                    <div className = "product_cart_name" key={id}>
                        <img src = {photo} alt = "img"/>
                        <h4>{name}</h4>
                        <i>${cost}</i>
                        <br />
                        <b>Count: {count}</b>
                        <br />
                        <button className = "close_btn"
                            onClick={() => removeFromCart(id, count)}
                        ><IoIosCloseCircle/></button>
                    </div>
            
            ))}
                    <h3>Total:
                        ${cart.reduce((total, { cost, count }) => total + cost * count, 0)}
                    </h3>
        </div>
    )
}
