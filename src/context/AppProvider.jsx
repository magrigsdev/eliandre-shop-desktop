import {useMemo, useState} from 'react';
import AppContext from "./AppContext.js";

// creation le context


//creation de provider, fourniseur de données
 const AppProvider = ({children}) => {
     const [currentPage, setCurrentPage] = useState('');


     //test
    const testValue = "je test si AppContext marche" // test reuissi
    const value = useMemo(
        ()=>(
            {
                testValue,
                setCurrentPage,
                currentPage,
            }),
        [testValue, setCurrentPage, currentPage]);


    return ( <AppContext.Provider
            value={ value }> {children}
        </AppContext.Provider>
    );
}
 export default AppProvider;


