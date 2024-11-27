import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.title === item.title &&
        cartItem.brand === item.brand &&
        cartItem.price === item.price
    );

    if (existingItem) {
      alert(`${item.title} is already in the cart.`);
      return;
    }

    const newItem = { ...item, cartId: uuidv4() };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (cartId) => {
    console.log("Removing item with cartId:", cartId); // Debugging log
    setCartItems((prevItems) => {
      const filteredItems = prevItems.filter((item) => item.cartId !== cartId);
      console.log("Updated cart items:", filteredItems); // Debugging log
      return filteredItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
