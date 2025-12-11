import { useCallback, useMemo, useState } from "react"
import { NavbarContext } from "./navbarContext"
import { handleRoute, isActived } from './../helpers/Helpers';


export const NavbarProvider  = ({children}) => {
    //init variable
    const [onglet, setOnglet] = useState([])
    

    if(onglet === undefined) throw new Error('onglet must be defined ')

    //useCallback for perform app
    const ongletManager = useCallback(
        (target) => isActived(onglet, target),[onglet]
    )
    const RouteManager = useCallback(
        (e, path, route) => handleRoute(e, path, route),[]
    )

     
    return (
        <NavbarContext.Provider 
            value={{
                    onglet, 
                    ongletManager, 
                    setOnglet,
                    RouteManager }}> {children} 
        </NavbarContext.Provider>)
}