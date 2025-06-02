import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../app/store'; 
import { removeFromCart, clearCart } from '../../features/cartSlice';
import './product.css';
import Navbar from '../Navbar/Navbar';



const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items  } = useSelector((state: RootState) => state.cart);

  if (!items.length) return <div className="empty-cart">Your cart is empty</div>;

  return (
    <div className="cart-container">
      <Navbar />

      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              {/* <p className="price">${item.price}</p> */}
            </div>
            <button onClick={() => confirm('Remove item from cart?') && dispatch(removeFromCart(item.id))} className="remove-btn">Remove</button>
          </div>
        ))}
      </div>

      <div className="clear-cart">
       
        <button onClick={() => confirm('Clear entire cart?') && dispatch(clearCart())} className="clear-cart-btn">Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
