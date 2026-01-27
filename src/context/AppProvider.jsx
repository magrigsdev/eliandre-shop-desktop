import {useCallback, useMemo, useState} from 'react';
import AppContext from "./AppContext.js";
import useCart from "../hooks/useCart.js";


// creation le context


//creation de provider, fourniseur de données

 const AppProvider = ({children}) => {
     //declaration des variable
     const [currentPage, setCurrentPage] = useState('');
     const [cartItems, setCartItems] = useState([]);
     //hooks personnalisé
     const {putCartItems} = useCart()


    //==========
     const  getCartItems = useCallback(() =>{putCartItems(setCartItems)}, cartItems )
     //test
    const testValue = "je test si AppContext marche" // test reuissi
    const value = useMemo(
        ()=>(
            {
                cartItems,
                testValue,

                setCurrentPage,
                setCartItems,
                currentPage,
                getCartItems
            }),
        [testValue,cartItems, currentPage, setCurrentPage, setCartItems,getCartItems]);


    return ( <AppContext.Provider
            value={ value }> {children}
        </AppContext.Provider>
    );
}
 export default AppProvider;


