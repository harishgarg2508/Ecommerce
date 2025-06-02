import { Routes, Route } from "react-router";

import Home from './pages/Home/Home';
import CartPage from './pages/Cart/Cart';
import Post from './pages/Post/Post';
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/Signup";

function App() {

  return (
    <>
   
  
  
  <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/post/:id' element={<Post />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

      

      


    </Routes>
    </>
  )
}

export default App
