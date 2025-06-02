import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../app/store";
import { removeFromCart, clearCart } from "../../features/cartSlice";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

 

  const handleClearCart = () => {
    confirm('Are you sure you want to clear the cart?') && dispatch(clearCart());
  };

  const handleRemove = (id: number) => {
    confirm('Remove item from cart?') && dispatch(removeFromCart(id));
  };

  if (items.length === 0) return <div className="empty-cart">Your cart is empty</div>;

  return (
    <>
    <Navbar />
    <div className="cart-container">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
            
            <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
         <button onClick={handleClearCart} className="clear-cart-btn">Clear Cart</button>
    </div>
    </>
  );
};

export default CartPage;
