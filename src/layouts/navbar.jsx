import { useNavigate } from 'react-router-dom'
import { useNavbar } from '../hooks/useNavbar'
import '../styles/navbar.css'
import Onglet from "../components/onglet.jsx";
import React from "react";

const Navbar = () => 
    {
        //variable for route
        const route = useNavigate()
        //init the customer hook 
        const {ongletManager, RouteManager} =  useNavbar()

        return (<>

            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">

                        <div className="text-xl font-bold text-teal-500">
                            Eliandre Shop
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <Onglet name="Home" active={true} />
                            <Onglet name="Category"  />
                            <Onglet name="Chart"  />
                            <Onglet name="Login"  />
                            <Onglet name="Logout"  />
                        </div>

                    </div>
                </div>
            </nav>


        </>)
    }
export default Navbar

