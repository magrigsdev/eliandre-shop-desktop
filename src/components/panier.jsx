import { useEffect } from "react";
import { useNavbar } from "../hooks/useNavbar";


const Panier = () =>{
    
    const {setOnglet} =  useNavbar()
    
    useEffect(()=>{setOnglet('panier');})
  return (
    <div>
      panier
    </div>
  )
}
export default Panier
