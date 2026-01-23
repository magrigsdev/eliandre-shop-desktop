import {useMemo, useState} from 'react';
import AppContext from "./AppContext.js";
import useCart from "../hooks/useCart.js";

// creation le context


//creation de provider, fourniseur de données

 const AppProvider = ({children}) => {
     //declaration des variable
     const [currentPage, setCurrentPage] = useState('');
     const [panier, setPanier] = useState(null);
     //hooks personnalisé
     const {cartCount, cartTotal, cartproduits} = useCart()


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


