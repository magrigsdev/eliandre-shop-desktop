import { useState } from "react"
import { NavbarContext } from "./navbarContext"
import { isActived } from './../helpers/Helpers';


export const NavbarProvider  = ({children}) => {
    const [onglet, setOnglet] = useState([])
    
    const test = "je test  le useNavbar";

    if(!onglet) throw new Error('onglet must be an array ')
    
    return (
        <NavbarContext.Provider 
            value={{
                    test,
                    onglet,
                    setOnglet, 
                    ongletManager: ()=> isActived(onglet)
                }}> {children} 
        </NavbarContext.Provider>)
}