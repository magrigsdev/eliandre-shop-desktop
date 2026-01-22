// components/CartItem.jsx
import React from 'react';
import { Boutton } from './Boutton';

const DEFAULT_IMAGE = 'https://img01.ztat.net/article/spp-media-p1/5823dc9dd03a48658730b63623db9ed6/1ee1c21c5bb64658a17e8adcfc9e3ca8.jpg?imwidth=1800&filter=packshot';

/**
 * Carte produit affichant les informations et permettant l'ajout au panier
 * @param {string} id - ID unique du produit
 * @param {string} titre - Nom du produit
 * @param {number} price - Prix en euros
 * @param {number} quantity - Quantité (pour affichage panier)
 * @param {string} image - URL de l'image
 * @param {string} description - Description du produit
 * @param {Function} onClick - Callback au clic sur "Ajouter"
 * @param {boolean} cart - Mode panier (true) ou catalogue (false)
 */
function CartItem({
                      id,
                      titre = 'Sac à main',
                      price = 0,
                      quantity = 0,
                      image = DEFAULT_IMAGE,
                      description = 'Lorem ipsum dolor sit amet.',
                      onClick,
                      cart = false,
                  }) {
    // Styles conditionnels
    const containerClass = cart
        ? 'w-full'
        : 'w-full max-w-sm';

    return (
        <div
            className={`
                flex flex-col bg-white border border-gray-200 
                rounded-lg shadow-sm hover:shadow-md 
                transition-shadow duration-200 overflow-hidden
                ${containerClass}
            `}
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={titre}
                    onError={(e) => {
                        e.target.src = DEFAULT_IMAGE;
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Titre */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {titre}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">
                    {description}
                </p>

                {/* Prix */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                        {price.toFixed(2)} €
                    </span>

                    {/* Quantité (si en mode panier) */}
                    {cart && quantity > 0 && (
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Qté: {quantity}
                        </span>
                    )}
                </div>

                {/* Bouton Ajouter (uniquement en mode catalogue) */}
                {!cart && onClick && (
                    <Boutton
                        type="button"
                        value="🛒 Ajouter au panier"
                        onClick={onClick}
                        className="w-full"
                    />
                )}
            </div>
        </div>
    );
}

export default CartItem;