import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Item from './components/Item';
import EmptyCart from './components/Empty';
import Testing from './components/Testing';
const App = () => {
  // what I can do
  // I can set the state here.
  // pass the state to nav and item
  // in shop create a state with to --- instead of regular Link to
  // and if its match ( instaed of using match.paramas.id) I should use the state of the stuff I put in shop - I then filter it
  // then when changing the cart and stuff I then change the state here in app (which cause it to change the state in nav)
  // so then each time I click on cart it will come with a certain data, empty if not having anything (so set at the begining to empty stuff, and then change it)

  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState(0);
  const [hiddenToggle, setHiddenToggle] = useState(true);
  const [totalUsd, setTotalUsd] = useState(0);

  const changingInput = e => {
    setCartItems(e.target.value);
  };

  const [count, setCount] = useState('sdsa');
  // const [testing, setTesting] = useState('zzzz');

  return (
    <Router>
      <div className="App">
        <Nav alon={count} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={Item} />
          {/* <Route path="/aaa" component={() => <Testing myProp={testing} />} /> */}
          <Route exact path="/cart" component={Cart} />
          <Route path="/emptycart" component={EmptyCart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
