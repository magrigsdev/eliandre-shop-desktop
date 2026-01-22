// components/category/CategoryBanner.jsx
import React from 'react';
import {Texts} from "../../Constants/texts.js";

/**
 * Bannière affichant le nombre de produits et un champ de recherche
 */
const CategoryBanner = ({
                            count = 0,
                            totalCount = 0,
                            cartCount = 0,
                            searchValue = '',
                            onSearchChange
                        }) => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Titre et compteur */}
                <div>
                    <h1 className="text-3xl font-bold mb-2 !px-4 !py-2">
                        Notre Collection
                    </h1>
                    <p className="w-full text-gray-900 !px-4 !py-2">
                        {count === totalCount
                            ? `${count} produit${count > 1 ? 's' : ''} disponible${count > 1 ? 's' : ''}`
                            : `${count} sur ${totalCount} produits`
                        }
                    </p>
                </div>

                {/* Recherche */}
                {onSearchChange && (
                    <div className="w-full md:w-96 !px-4 !py-2">
                        <input
                            type="text"
                            placeholder= {Texts.SEARCH_DESCRIPTIONS}
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-200 !px-4 !py-2 rounded-lg text-gray-900
                                     border-2 border-white/20
                                     focus:outline-none focus:border-white
                                     placeholder-gray-400"
                        />
                    </div>
                )}

                {/* Panier */}

                    <div className="bg-white/20 backdrop-blur-sm !px-4 !py-2 rounded-full text-gray-900">
                        <span className="text-lg font-semibold">
                            Article{cartCount > 1 ? 's' : ''} 🛒 ( {cartCount} )
                        </span>
                    </div>

            </div>
        </div>
    );
};

export default CategoryBanner;