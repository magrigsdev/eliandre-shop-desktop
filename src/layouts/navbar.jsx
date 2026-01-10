import {useLocation, useNavigate} from 'react-router-dom'
import { useNavbar } from '../hooks/useNavbar'
import '../styles/navbar.css'
import Onglet from "../components/onglet.jsx";
import React from "react";

const Navbar = () => 
    {
        //variable for route
        const route = useNavigate()
        //init the customer hook 
        //const {ongletManager, RouteManager} =  useNavbar()


        return (<>

            <nav className="bg-white border-b border-gray-200 !mb-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">

                        <div className="text-xl font-bold text-teal-500">
                            Eliandre Shop
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <Onglet name="Home" actived={true} onNavigate={()=>{route('/')}}/>
                            <Onglet name="Category"   onNavigate={()=>{route('/category')}}/>
                            <Onglet name="Cart"   onNavigate={()=>{route('/cart')}}/>
                            <Onglet name="Login"   onNavigate={()=>{route('/login')}}/>
                            <Onglet name="Logout"   onNavigate={()=>{route('/logout')}}/>
                            <Onglet name="Register"   onNavigate={()=>{route('/register')}}/>
                        </div>

                    </div>
                </div>
            </nav>


        </>)
    }

export default Navbar

/**
 * @param location
 * @return boolean
 * **/
const findCurrentPage = (location) =>{
    switch (location.pathname) {
        case '/':
            return true
        case '/category':
            return true
        case '/cart':
            return true
        case '/login':
            return true
        case '/logout':
            return true
        case '/register':
            return true
        default:
            return false

    }
}
