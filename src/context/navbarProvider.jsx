import { useCallback, useState } from "react"
import { NavbarContext } from "./navbarContext"
import { DisplayIfNotWelcome, handleRoute, isActived } from './../helpers/Helpers';



export const NavbarProvider  = ({children}) => {
    //init variable
    const [onglet, setOnglet] = useState([])
    const [location, setLocation] = useState([])
    const [connected, setConnected] = useState(false)
    
    

    if(onglet === undefined) throw new Error('onglet must be defined ')

    //useCallback for perform app
    const ongletManager = useCallback(
        (target) => isActived(onglet, target),[onglet]
    )
    const RouteManager = useCallback(
        (e, path, route) => handleRoute(e, path, route),[]
    )
    const NavbarManager = useCallback(
        (component) => DisplayIfNotWelcome(location,component), [location]
    )


     
    return (
        <NavbarContext.Provider 
            value={{
                    //variables
                    onglet,
                    location,
                    connected,
                    setConnected,
                    setLocation,
                    setOnglet,

                    //functions
                    ongletManager,
                    RouteManager,
                    NavbarManager
                    }}> {children} 
        </NavbarContext.Provider>)
}