import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "../layouts/Navbar"
import Bienvenue from "../Pages/bienvenue.jsx"
import Accueil from "../Pages/accueil.jsx"
import Login from "../Pages/login.jsx"
import Register from "../Pages/register.jsx"
import Logout from "../Pages/logout.jsx"
import Category  from "../Pages/category.jsx"
import Cart from "../Pages/cart.jsx"
import Footer from "../layouts/footer"
//import { useNavbar } from "../hooks/useNavbar"

import Home from "../Pages/home.jsx"
import Navbars from "../components/navbars.jsx";


export const Browers = ()=> {
    //init use
    //const { location} = useLocation()
    //useEffect(()=>{setLocation(location)})

    //init uselocation
   //console.log("location sur browers ", location)
  return (
    
    <BrowserRouter> 
        <Navbars/>

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
