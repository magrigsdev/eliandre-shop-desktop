import {useCallback} from "react";
import {Routes} from "../Constants/Routes.js";

/**
*  @return Text
*  @callback pageManager
* */
const useNavbar = () => {

    // une fonction qui gere la page active
    /**
     * @param routeKey : nom de la route
     * @param currentRoute : route actuelle de la page
     * @return boolean true ou false
     * */
    const pageManager = useCallback((routeKey, currentRoute)=>{
        console.log("test sur entré dans pageManager", routeKey, currentRoute)
        routeKey = routeKey.toUpperCase();
        console.log("test sur entré dans pageManager 1er passage", routeKey, currentRoute)
        //verifier si ca exist cette page
        if (!Object.hasOwn(Routes, routeKey)) return false;
        console.log("test sur entré dans pageManager 2eme passage", routeKey, currentRoute)
        // verifier que la currentRoute est bien vrai
        return Routes[routeKey] === currentRoute;

    },[]);
    const Text = "useNavbar"


    return {pageManager, Text};
    }
    export default  useNavbar;