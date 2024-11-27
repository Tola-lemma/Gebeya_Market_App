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
        return existingItem; // Return existing item if found
      }
    
      const newItem = { ...item, cartId: uuidv4() };
      setCartItems((prevItems) => [...prevItems, newItem]);
      return newItem; // Return newly created item
    };
    
  const removeFromCart = (cartId) => {
    setCartItems((prevItems) => {
      const filteredItems = prevItems.filter((item) => item.cartId !== cartId);
      return filteredItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
