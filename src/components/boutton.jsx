import React from 'react';

export  const Boutton  = ({type, value, onclick, size= '100', restore=false}) => {
  return <button
              type={type}
              onClick={onclick}
              className = {`w-${size} 
                    text-white items-center justify-center  border-teal
                    ${restore === false ? "!bg-teal-600" : "!bg-red-500" } ?  
                    hover:bg-amber-100`}>
              {value}
        </button>
}

