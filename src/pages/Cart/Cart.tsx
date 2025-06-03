import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../app/store";
import { removeFromCart, clearCart } from "../../features/cartSlice";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Dialog from "../../components/Dialog/Dialog";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const { items } = useSelector((state: RootState) => state.cart);

  const handleClearCart = () => {
    confirm('Are you sure you want to clear the cart?') && dispatch(clearCart());
  };

  const handleRemoveClick = (id: number) => {
    setSelectedItemId(id);
    setOpen(true);
  };

  const handleRemove = () => {
    if (selectedItemId) {
      dispatch(removeFromCart(selectedItemId));
    }
    setOpen(false);
    setSelectedItemId(null);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedItemId(null);
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
              <button 
                onClick={() => handleRemoveClick(item.id)} 
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button onClick={handleClearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        onConfirm={handleRemove}
        title="Remove Item"
        message="Are you sure you want to remove this item from your cart?"
      />
    </>
  );
};

export default CartPage;