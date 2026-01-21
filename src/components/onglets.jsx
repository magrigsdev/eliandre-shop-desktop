
import { NavLink} from 'react-router-dom'

import React from 'react';


const Onglets = ({to, name}) => {
    return (
        <NavLink
            to={to}

            className={({ isActive }) =>
                `px-3 py-2 font-medium transition !mx-4
                ${isActive
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-600 hover:text-teal-500'}`}
        > {name} </NavLink>
    );
};


export default Onglets;