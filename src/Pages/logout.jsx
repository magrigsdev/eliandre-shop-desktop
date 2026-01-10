
import React, { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar.js'
import UserCard from "../components/userCard.jsx";
import {useLocation} from "react-router-dom";

 const Logout = () => {
  //call onglet from custom hook
  const {setOnglet, Onglet} =  useNavbar()
  //update onglet for current page name
  useEffect(()=>{setOnglet('deconnexion'); })
     const location = useLocation(); useLocation();
     console.log('location : ',location);
     console.log('onglet : ',Onglet);
     return (
         <div className="flex justify-center items-center bg-white " >
             <div className="grid grid-flows-row auto-rows-max">
                 {/**  bloc 1 title   ***/}
                 <div className="flex justify-start !mb-2 ">
                     {/**  bloc 1 logo and title   ***/}
                     <div className="flex flex-start gap-x-6 ">
                         <div className="mt-2 w-180 gap-x-2 !py-6">
                             <p className="text-base"> Salut ! LOGOUT</p>
                         </div>
                     </div>
                 </div>

                 {/**  bloc 2 subscribe columns  ***/}

                 <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">
                     <div className="flex justify-center !mb-2">
                         <UserCard />
                     </div>
                 </div>


             </div>
         </div>
     );
}
export default Logout
