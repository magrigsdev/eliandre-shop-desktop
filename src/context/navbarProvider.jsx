import { useState } from "react"
import { NavbarContext } from "./navbarContext"
import { isActived } from './../helpers/Helpers';


export const NavbarProvider  = ({children}) => {
    const [onglet, setOnglet] = useState([])
    
    const test = "je test  le useNavbar";

    if(onglet === undefined) throw new Error('onglet must be defined ')
    
    return (
        <NavbarContext.Provider 
            value={{
                    test,
                    onglet,
                    setOnglet, 
                    ongletManager: (target)=> isActived(onglet,target)
                }}> {children} 
        </NavbarContext.Provider>)
}