import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from './Home.module.css';

const Nav = props => {
  // console.log(props);

  // const [count, setCount] = useState('keep counting');

  return (
    <nav className={HomeCSS['nav-container']}>
      <ul className={HomeCSS['nav-links']}>
        <Link to="/" className={HomeCSS['links']}>
          <li>Home</li>
        </Link>

        <Link to="/shop" className={HomeCSS['links']}>
          <li>Shop</li>
        </Link>
        <Link
          to={{
            pathname: '/shop',
            state: {
              cartItems: props.alon,
              playerCard: 2,
              totalPrice: 3,
            },
          }}
          className={HomeCSS['links']}
        >
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
