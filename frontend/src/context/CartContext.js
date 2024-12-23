import React, { createContext, useState, useContext } from 'react';

// Tạo context cho giỏ hàng
const CartContext = createContext();

// Hook để sử dụng giỏ hàng
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider cung cấp giá trị giỏ hàng cho các component con
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0); // Số lượng sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([]);

  const updateCartCount = (quantity) => {
    setCartCount(cartCount + quantity); // Cập nhật số lượng sản phẩm trong giỏ hàng
  };

  const updateCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === newItem.title && item.size === newItem.size
      );
      if (existingItemIndex >= 0) {
        // Cập nhật số lượng nếu sản phẩm đã có trong giỏ
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Thêm sản phẩm mới vào giỏ hàng
        return [...prevItems, newItem];
      }
    });
    updateCartCount(newItem.quantity);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.title !== itemToRemove.title || item.size !== itemToRemove.size
      )
    );
    setCartCount(cartCount - itemToRemove.quantity); // Giảm số lượng sản phẩm
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount, cartItems, updateCart, removeItemFromCart, setCartCount, setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};


