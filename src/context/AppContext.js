// src/context/AppContext.js
import {createContext, useMemo, useState} from 'react';

import React from 'react';

// creation le context
export const AppContext = createContext();

//creation de provider, fourniseur de données
export const AppProvider = ({children}) => {

    //le cart
    const testValue = "je test si AppContext marche"
    const value = useMemo(()=>({testValue}), [testValue]);

    return ( <AppContext.Provider
            value={{ value }}> {children}
        </AppContext.Provider>
    );
};

