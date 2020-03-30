import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles.sass';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { productsContext } from '../../../context/products';
import { CartContext } from '../../../context/cart';
import { FavouritesContext } from '../../../context/favourites'
import { TiStarFullOutline } from "react-icons/ti";
export const SingleProductListItem = ({ image, artist, name, price, id}) => {
    const productsList = useContext(productsContext);
    const { addToCart } = useContext(CartContext);
    const { addToFavourites } = useContext(FavouritesContext);
    const product = productsList.find(item => item.id == id);    

    return (
        <div to={`/products/${id}`} className={`product-card-list-item`}>
            <img className = "product_photo" alt={name} src={image} />
            <h4 className = "name_product">{name}</h4>
            <h4 className = "artist_name">{artist}</h4>
            <Rater style = {{fontSize: '20px', marginBottom: '20px'}} rating={0} total={5} onClick={() => addToFavourites(product)}   />
            {/* <button className = "stars"><TiStarFullOutline/></button>
            <button className = "stars"><TiStarFullOutline/></button>
            <button className = "stars"><TiStarFullOutline/></button>
            <button className = "stars"><TiStarFullOutline/></button>
            <button onClick={() => addToFavourites(product)} className = "stars"><TiStarFullOutline/></button> */}
            <div className = "belongtoCard">
            <h3>{price}$</h3>
            <button onClick={() => addToCart(product)} className = "btn">Add to Card</button>
            </div>
        </div>
    )
}

