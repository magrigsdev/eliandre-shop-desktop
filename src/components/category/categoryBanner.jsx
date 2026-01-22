import React from 'react';

/**
 *
 * @param count
 * @param cartCount
 * @param inputvalue
 * @param onChange
 * @returns {React.JSX.Element}
 * @constructor
 */
const CategoryBanner = ({count, cartCount, inputvalue, onChange}) => {
    return (
        <div className="flex justify-between !mb-4">
            <p className="text-base text-teal-800">
                NOMBRE DE SACS ( {count} )
            </p>
            <p className="text-base text-red-800">
                PANIER - CART ({cartCount} )
            </p>
            <p className="text-base text-teal-800">
                Recherche
                <input
                    type="text"
                    value={inputvalue}
                    onChange={onChange}
                    //onChange={e => onChange(e.target.value)}
                    placeholder='filtre les produits'
                    className="
                    w-full rounded-md border border-gray-300
                    !py-2 !pl-2 !pr-3
                    text-sm text-gray-700
                    placeholder-gray-400
                    focus:outline-none
                    focus:ring-2 focus:ring-teal-500
                    focus:border-transparent
                "
                />
            </p>
        </div>
    );
};

export default CategoryBanner;