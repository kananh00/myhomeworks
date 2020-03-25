import React from 'react';
import './styles.sass';
import { TiStarFullOutline } from "react-icons/ti";
export const SingleProduct = ({ name, artistname, cost, description, photo, onClick }) => {
    
    return (
        <div className="single-product">
            
            <img className = "product_photo" src = {photo} alt = "photo"/>
            <p className = "name_product">{name}</p>
            <i className = "artist_name">{artistname}</i>
            <p><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/><TiStarFullOutline/></p>
            <p>{description}</p>
            <div className = "belongtoCard">
                <p className = "cost_product">${cost}</p>
                <button className = "btn" onClick={onClick}>Add to Card</button>
            </div>
            
        </div>
    )
}
