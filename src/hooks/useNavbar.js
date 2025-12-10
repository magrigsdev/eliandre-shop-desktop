import { useContext } from "react"
import { NavbarContext } from "../context/navbarContext"


export const useNavbar = () => {
    const ctxt =  useContext(NavbarContext);
    if(!ctxt) throw new Error("😭 useNavbar doit être utilsé dans du <NavbarProvider>")
    return ctxt
    }