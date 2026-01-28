import React from 'react';
import { Boutton } from './Boutton';

const DEFAULT_IMAGE = 'https://img01.ztat.net/article/spp-media-p1/5823dc9dd03a48658730b63623db9ed6/1ee1c21c5bb64658a17e8adcfc9e3ca8.jpg?imwidth=1800&filter=packshot';

function CartItem({
                      _id,
                      titre = 'Sac à main',
                      price = 0,
                      quantity = 0,
                      image = DEFAULT_IMAGE,
                      description = 'Lorem ipsum dolor sit amet.',
                      onClick,
                      cart = false,
                  }) {
    // Largeur fixe plus petite pour le catalogue (ex: 240px au lieu de 400px)
    const containerClass = cart ? 'w-full max-w-md' : 'w-60';

    return (
        <div
            className={`
                flex flex-col bg-white border border-gray-100 
                rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1
                transition-all duration-300 overflow-hidden
                ${containerClass}
            `}
        >
            {/* Image Container - Ratio fixe pour la cohérence */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={image}
                    alt={titre}
                    onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
                />
                {/* Badge prix discret sur l'image (optionnel) */}
                {!cart && (
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
                        <span className="text-sm font-bold text-gray-900">{price.toFixed(2)}€</span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-3 flex flex-col flex-grow">
                {/* Titre - Plus petit et centré */}
                <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-blue-600">
                    {titre}
                </h3>

                {/* Description - Très courte */}
                <p className="text-xs text-gray-500 mb-3 line-clamp-2 h-8 leading-tight">
                    {description}
                </p>

                {/* Footer de la carte */}
                <div className="mt-auto !pt-2 !p-2 flex items-center justify-between border-t border-gray-50">
                    {cart ? (
                        <div className="flex items-center justify-between w-full !pt-2 !p-2">
                            <span className="text-sm font-bold text-gray-900">{price.toFixed(2)}€</span>
                            <span className="text-[10px] uppercase tracking-wider bg-gray-100 !px-2 !py-1 rounded text-gray-600">
                                Qté: {quantity}
                            </span>
                            <Boutton
                                restore = "true"
                                type="button"
                                value="Retirer"
                                onClick={onClick}
                                className="w-full !text-xs !py-1.5 !rounded-md" // On force un style plus fin
                                size="small"
                            />
                        </div>

                    ) : (
                        <div className="w-full">
                            <Boutton
                                type="button"
                                value="Ajouter"
                                onClick={onClick}
                                className="w-full !text-xs !py-1.5 !rounded-md" // On force un style plus fin
                                size="small"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartItem;