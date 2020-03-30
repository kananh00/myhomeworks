import React, { createContext, useReducer } from 'react';

export const FavouritesContext = createContext();

const initialState = { favouritesProducts: [] };

function favouritesReducer(state, { type, payload }) {
    switch (type) {
        case 'add_to_favourites':
            return { favouritesProducts: [...state.favouritesProducts, payload] }
        case 'remove_from_favourites':
            return { favouritesProducts: state.favouritesProducts.filter(p => p.uniqLocalId !== payload) }
        default:
            return state
    }
}

export const FavouritesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(favouritesReducer, initialState);

    const addToFavourites = product => {
        dispatch({
            type: 'add_to_favourites',
            payload: { ...product, uniqLocalId: Date.now() }
        })
    }

    const removeFromFavourites = uniqLocalId => {
        dispatch({
            type: 'remove_from_favourites',
            payload: uniqLocalId
        })
    }

    return (
        <FavouritesContext.Provider value={{ ...state, addToFavourites, removeFromFavourites }}>
            {children}
        </FavouritesContext.Provider>
    )
} 
