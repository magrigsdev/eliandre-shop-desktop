import React from 'react';

// composant field , pour tous type de champs
export const Field = ({value,name, width='w-50', errorMessage, onChange, type, placeholder}) => {
        return (
            <div className={`${width} max-w-sm mb-4`}>
                <label htmlFor={name} className="text-base mb-1 font-medium text-heading">{name}</label>
                <input
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    value={value}

                    className={`${width} h-8 rounded-md   text-heading text-sm rounded-base focus:accent-teal-400 block !px-2 !py-2.5 shadow-sm 
                    ${errorMessage  ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-teal-500"
                    }`}
                 required />
                {errorMessage  && <div className=" text-sm !mt-1 text-red-500">{errorMessage}</div>}

        </div>)
}




