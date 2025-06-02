import { NavLink } from "react-router-dom"
import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import {type RootState } from '../../app/store'
import { Outlet } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
 const cartItems = useSelector((state: RootState) => state.cart.items);
 const User = useSelector((state: RootState) => state.auth.user);
 const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className='logo'>
          <NavLink to="/">
            <img src="https://shorturl.at/yF0Yo" alt="Logo" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
           
          </li>
          <li>
             {User?.fullName}
          </li>
          <li>
            <NavLink to="/Cart" className={({ isActive }) => (isActive ? "active" : "")}>
              <ShoppingCart className='cart-trolley' />
              <span className='total-count'>{cartCount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar