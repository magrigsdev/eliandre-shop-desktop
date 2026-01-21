import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "../Pages/login.jsx"
import Register from "../Pages/register.jsx"
import Logout from "../Pages/logout.jsx"
import Category  from "../Pages/category.jsx"
import Cart from "../Pages/cart.jsx"
import Footer from "../components/footer.jsx"
import Home from "../Pages/home.jsx"
import Navbar from "../components/navbar.jsx";


export const Browers = ()=> {

  return (
    
    <BrowserRouter> 
        <Navbar/>

            <Routes>
                <Route path="/" element={ <Home /> }  />
                <Route path="/login" element={ <Login/> }  />
                <Route path="/register" element={ <Register/> }  />
                <Route path="/logout" element={<Logout/> }  />
                <Route path="/category" element={<Category/> }  />
                <Route path="/cart" element={<Cart /> }  />

            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
