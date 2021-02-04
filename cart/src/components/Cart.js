import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams, useLocation } from 'react-router';
import cartCSS from './Cart.module.css';
import EmptyCart from './Empty';

const Cart = ({ match }) => {
  console.log(useHistory());

  const product = useLocation().state.playerCard.name;
  const price = useLocation().state.playerCard.price;
  const items = useLocation().state.cartItems;
  const playerImage = useLocation().state.playerCard.img;
  const totalUsd = useLocation().state.totalPrice;

  const [productName, setProductName] = useState(product);
  const [productPrice, setProductPrice] = useState(price);
  const [cartQuantity, setCartQuantity] = useState(items);
  const [productImg, setProductImage] = useState(playerImage);
  const [totalPrice, setTotalPrice] = useState(totalUsd);

  const changingInput = e => {
    setCartQuantity(e.target.value);
  };

  useEffect(() => {
    setTotalPrice(prevPrice => {
      let newPrice = cartQuantity * productPrice;
      return newPrice;
    });
  }, [cartQuantity]);

  return (
    <div>
      <h1>Cart</h1>

      <div className={cartCSS['table-container']}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={productImg} />
              </td>
              <td> {productName} Jersey </td>
              <td> {productPrice}$ </td>
              <td>
                {' '}
                <input
                  type="number"
                  onChange={changingInput}
                  value={cartQuantity}
                />{' '}
              </td>
              <td> {totalPrice}$ </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>Cart total</h3>
        <p>Total: {totalPrice}$</p>
        <button>Proceed To checkout</button>
      </div>
    </div>
  );
};

export default Cart;
