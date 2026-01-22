import React from 'react';

//le composant boutton
/**
 *
 * @param type
 * @param value
 * @param onClick
 * @param size
 * @param restore
 * @returns {React.JSX.Element}
 * @constructor
 */
export  const Boutton  = ({type, value, onClick, size= '100', restore=false}) => {
  return <button
              type={type}
              onClick={onClick}
              className = {`w-${size}
                    text-white items-center justify-center  border-teal
                    ${restore === false ? "!bg-teal-600" : "!bg-red-500" } ?  
                    hover:bg-amber-100`}>
              {value}
        </button>
}

