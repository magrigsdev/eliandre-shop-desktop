
import { NavLink} from 'react-router-dom'

import React from 'react';


const Onglet = ({to, name}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-3 py-2 font-medium transition !mx-4
                ${isActive
                    ? 'text-teal-600  '
                    : 'text-gray-600 hover:text-teal-500'}`}
        > {name} </NavLink>
    );
};


export default Onglet;