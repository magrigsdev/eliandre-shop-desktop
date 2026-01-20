// src/context/AppContext.js
import { createContext, useState } from 'react';

import React from 'react';

// Créer le context
export const AppContext = createContext();
//creation de provider, fourniseur de données
export const AppProvider = ({childen}) => {

    //le cart

    return ( <AppContext.Provider
            value={{ childen }}>

        </AppContext.Provider>
    );
};

