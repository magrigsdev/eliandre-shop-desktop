// components/category/CategoryBanner.jsx
import React from 'react';

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
                    <h1 className="text-3xl font-bold mb-2">
                        Notre Collection
                    </h1>
                    <p className="text-blue-100">
                        {count === totalCount
                            ? `${count} produit${count > 1 ? 's' : ''} disponible${count > 1 ? 's' : ''}`
                            : `${count} sur ${totalCount} produits`
                        }
                    </p>
                </div>

                {/* Recherche */}
                {onSearchChange && (
                    <div className="w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Rechercher un produit..."
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg text-gray-900
                                     border-2 border-white/20
                                     focus:outline-none focus:border-white
                                     placeholder-gray-400"
                        />
                    </div>
                )}

                {/* Panier */}
                {cartCount > 0 && (
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-lg font-semibold">
                            🛒 {cartCount} article{cartCount > 1 ? 's' : ''}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryBanner;