import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ShopCSS from './Shop.module.css';
import KobeJersey from '../images/kobe.webp';
import lebronJersey from '../images/lebron-jersey.webp';
import mikeJersey from '../images/jordan.webp';
import durantJersey from '../images/durant.webp';
import doncicJersey from '../images/doncic.webp';
import jokicJersey from '../images/jokic.webp';

const Shop = () => {
  console.log(useLocation());
  return (
    <div className={ShopCSS['grid-shop']}>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/kobe'} className={ShopCSS['kobe']}>
          <img src={KobeJersey} />
          <h3>Kobe Bryant </h3>
          <p>250$</p>
        </Link>
      </div>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/lebron'} className={ShopCSS.lebron}>
          <img src={lebronJersey} />
          <h3>Lebron James</h3>
          <p>200$</p>
        </Link>
      </div>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/mike'} className={ShopCSS['mike']}>
          <img src={mikeJersey} />
          <h3> Michael Jordan</h3>
          <p>250$</p>
        </Link>
      </div>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/kevin'} className={ShopCSS['kevin']}>
          <img src={durantJersey} />
          <h3> Kevin Durant </h3>
          <p>250$</p>
        </Link>
      </div>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/luka'} className={ShopCSS['luka']}>
          <img src={doncicJersey} />
          <h3>Luka Doncic </h3>
          <p>250$</p>
        </Link>
      </div>
      <div className={ShopCSS['player-container']}>
        <Link to={'/shop/nikola'} className={ShopCSS['nikola']}>
          <img src={jokicJersey} />
          <h3>Nikola Jokic</h3>
          <p>250$</p>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
