import { useLocation, useNavigate } from 'react-router-dom'
import bienvenue from '../assets/bienvenue.jpg'

import { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar'
import {ShoppingCart} from "lucide-react";

const Bienvenue =  () => {
    const route = useNavigate()
    //update location
    const {pathname} = useLocation()
    //useNavbar
    const {setLocation} = useNavbar()
    useEffect(()=>{setLocation(pathname)})

    //test
    // console.log("page welcome", location)
    
    return (
        <>
            <div className="flex justify-center items-center bg-white w-screen" >
                <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">
                    <div className="flex justify-center !mb-2">
                        <ShoppingCart className="w-20 h-20 text-teal-600 " />
                    </div>
                    <div className="flex justify-center"> <h2>Bienvenue sur Eliandre shop</h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-3xs">Découvrez Eliandre Shop, votre boutique en ligne dédiée à l'élégance et à la beauté.</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={bienvenue} alt="" />
                    </div>
                    <div className="flex justify-center !mt-4">
                        <button
                            className="w-100 text-teal-600 items-center justify-center  border-teal"
                            type="button"
                            onClick={()=>route('./connexion')}> Commencez</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bienvenue


