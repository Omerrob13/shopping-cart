import React from 'react';
import { Link } from 'react-router-dom';
import HomeCSS from './Home.module.css';
const Home = () => {
  return (
    <div>
      <div className={HomeCSS['main-section']}>
        <div className={`${HomeCSS.col} ${HomeCSS.col1}`}></div>
        <div className={`${HomeCSS.col} ${HomeCSS.col2}`}>
          <h1>Your Place for NBA Jerseys</h1>

          <h2>"Jereys quality was the best I have ever had"</h2>
          <Link to="/shop">
            <button className={HomeCSS['col2-btn']}>Buy Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
