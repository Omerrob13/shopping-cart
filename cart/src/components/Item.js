import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import data from '../data/data';
import ItemCSS from './Item.module.css';
import { useParams } from 'react-router';

const Item = ({ match }) => {
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState(0);
  const [hiddenToggle, setHiddenToggle] = useState(true);
  const [totalUsd, setTotalUsd] = useState(0);
  const changingInput = e => {
    setCartItems(e.target.value);
  };
  let filterItem = data.filter(dataItem => {
    if (dataItem.id === match.params.id) {
      return dataItem;
    }
  });

  let playerItem = filterItem[0];

  const addToCart = e => {
    setCart(cartItems);
    setTotalUsd(prevUsd => {
      let totalUsd = cartItems * playerItem.price;
      return totalUsd;
    });
  };
  useEffect(() => {
    if (cart > 0) {
      setHiddenToggle(false);
    }
  });

  return (
    <div>
      <h1>{playerItem.name}</h1>
      <img src={playerItem.img} />
      <p>Price: {playerItem.price}$</p>
      <div className={hiddenToggle ? 'hidden' : 'added-to-cart'}>
        "{playerItem.name}" Jersey has been added to your cart.
        <button>View Cart</button>
      </div>
      <input
        value={cartItems}
        onChange={changingInput}
        className="alon"
        type="number"
      ></input>
      <button onClick={addToCart}>Add to cart</button>
      <div>
        <Link
          to={{
            pathname: '/cart',
            state: {
              cartItems: cart,
              playerCard: playerItem,
              totalPrice: totalUsd,
            },
          }}
        >
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
