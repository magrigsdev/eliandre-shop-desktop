import { useMemo, useState} from 'react';
import AppContext from "./AppContext.js";

// creation le context


//creation de provider, fourniseur de données

 const AppProvider = ({children}) => {
     //declaration des variable
     const [currentPage, setCurrentPage] = useState('');


     //OBJECT CARTS
     const [objectCart, setObjectCart] = useState({
         total: 0,
         numberProduit :0,
         sousTotal : 0,
         cartProduitsObject : []
     })



    //==========

     //test

    const value = useMemo(
        ()=>(
            {
                setCurrentPage,
                currentPage,


                //test...
                objectCart, setObjectCart


            }),
        [currentPage, setCurrentPage,
            objectCart,setObjectCart
            ]);


    return ( <AppContext.Provider
            value={ value }> {children}
        </AppContext.Provider>
    );
}
 export default AppProvider;


