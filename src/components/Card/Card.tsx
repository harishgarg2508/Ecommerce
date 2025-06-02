import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCart } from '../../features/cartSlice'
import './card.css'

interface CardProps {
  id: number; 
  image: string;
  title: string;
  price: number;
  description?: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, description, price }) => {
  const dispatch = useDispatch()

 const handleClick = () => {
    const confirmed = confirm('Are you sure you want to add this item to the cart?');
    if (confirmed) {
      dispatch(addToCart({
        id,
        title,
        price,
        image
      }))
    }
  }
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className='description'>
          <NavLink to={`/post/${id}`} className="card-title">
            {title}
          </NavLink>
        </div>
        <p className="card-price">Price: ${price}</p>
        <p className="card-description">{description}</p>
      </div>
      <div>
        <button 
          className='add-to-cart'
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card