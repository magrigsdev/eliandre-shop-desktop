import React from 'react';

const CategoryBanner = ({count}) => {
    return (
        <div className="flex justify-between !mb-2">
            <p className="text-base text-teal-800">
                NOMBRE DE SACS ( {count} )
            </p>
            <p className="text-base text-red-800">
                PANIER - CART (0)
            </p>
            <p className="text-base text-teal-800">
                Recherche
            </p>
        </div>
    );
};

export default CategoryBanner;