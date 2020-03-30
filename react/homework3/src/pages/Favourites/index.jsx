import React, { useContext } from 'react';
import './styles.sass';
import { IoIosCloseCircle } from "react-icons/io";
import { Layout } from '../../commons';
import { TiStarFullOutline } from "react-icons/ti";
import { FavouritesContext } from '../../context/favourites'

export const Favourites = () => {

    const { favouritesProducts, removeFromFavourites } = useContext(FavouritesContext);

    return (
        <Layout>
            <h1>Favourites</h1>
            {favouritesProducts.map(({ id, name, artist, price, image, uniqLocalId }) => (
                <div className = "product_cart_name">
                    
                    <img src={image} alt={name} />
                    <h5>{name}</h5>
                    <h5 style = {{color: 'grey'}}>{artist}</h5>
                    <h4>${price}</h4>
                    <div className = "star_spec">
                    <button className = "star selected"><TiStarFullOutline/></button>
                    <button className = "star"><TiStarFullOutline/></button>
                    <button className = "star"><TiStarFullOutline/></button>
                    <button className = "star"><TiStarFullOutline/></button>
                    <button onClick={() => removeFromFavourites(uniqLocalId)} style ={{marginRight: '10px'}} className = "star"><TiStarFullOutline/></button>
                </div>
                </div>
            ))}
        </Layout>
    )
}
