import {useMemo} from 'react';
import AppContext from "./AppContext.js";

// creation le context


//creation de provider, fourniseur de données
 const AppProvider = ({children}) => {
    //test
    const testValue = "je test si AppContext marche" // test reuissi
    const value = useMemo(
        ()=>({testValue}), []);


    return ( <AppContext.Provider
            value={ value }> {children}
        </AppContext.Provider>
    );
}
 export default AppProvider;


