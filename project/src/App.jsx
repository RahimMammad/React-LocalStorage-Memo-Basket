import React, { useCallback, useEffect, useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const emptyCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div>
      <Products cart={cart} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

export default App;
