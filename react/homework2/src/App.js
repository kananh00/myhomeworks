import React, { useState, useEffect } from 'react';

import {
  SingleProduct,
  Cart
} from './components';

function App() {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([]);
 


  const getProducts = async () => {
    const res = await fetch(`http://localhost:3001/products`);
    const data = await res.json();

    setProducts(data);
  }

  const addToCart = (name, cost, photo, id) => {
    if (!isNaN(cost)) {
      const isAvailable = cart.find((item2) => id === item2.id);

      if (isAvailable) {
        setCart(cart => cart.map(item2 => {
          if (item2.id === id) {
            return {
              ...item2,
              count: item2.count + 1
            }
          }
          return item2
        }))
      } else {
        setCart(cart => [...cart, {
          name,
          cost,
          photo,
          id,
          count: 1
        }])
      }

    }

  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className="App">
      
      <div className="products-list">
        {/* {data.results.map(({ name, price, id }) => (
          <SingleProduct
            key={id}
            name={name}
            cost={price}
            onClick={() => addToCart(name, price, id)}
          />
        ))} */}
          {products.map(item => (
                <SingleProduct
                    key={item.id}
                    cost = {item.price}
                    description = {item.desc}
                    photo = {item.image}
                    artistname = {item.artist}
                    onClick={() => addToCart(item.name, item.price, item.image, item.id)}
                    {...item}
                />
            ))}
{/* 
        {!!products.next &&
          <button
            className="load-more"
            onClick={loadMore}
          >Load more</button>
        } */}
      </div>

      <Cart
        cart={cart}
        setCart={setCart}
      />

    </div>
  );
}

export default App;
