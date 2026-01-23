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

        routeKey = routeKey.toUpperCase();
        //verifier si ca exist cette page
        if (!Object.hasOwn(Routes, routeKey)) return false;

        // verifier que la currentRoute est bien vrai
        return Routes[routeKey] === currentRoute;

    },[]);
    const Text = "useNavbar"

    return {pageManager, Text};
    }
    export default  useNavbar;