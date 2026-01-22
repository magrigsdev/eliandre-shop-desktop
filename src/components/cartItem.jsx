import React from 'react';
import { Boutton } from './boutton.jsx';

const DEFAULT_IMAGE =
    'https://img01.ztat.net/article/spp-media-p1/5823dc9dd03a48658730b63623db9ed6/1ee1c21c5bb64658a17e8adcfc9e3ca8.jpg?imwidth=1800&filter=packshot';


function CartItem({
                      titre = 'Sac à main',
                      price = 0,
                      quantity = 0,
                      image = DEFAULT_IMAGE,
                      description = 'Lorem ipsum dolor sit amet.',
                      onAdd,
                      cart = false,
                  }) {
    const widthCart = cart ? 'w-full' : 'w-[420px]'
    return (
        <div
            className={`
                flex border border-gray-300 rounded-md p-3 mr-4
                ${widthCart}
            `}
        >
            {/* Image */}
            <div className="basis-1/3 !p-2">
                <img
                    className="w-50 h-50  rounded-xl"
                    src={image}
                    alt={titre}
                />
            </div>

            {/* Text */}
            <div className="basis-2/3 !p-2">
                <h3 className="text-md font-medium">{titre}</h3>

                <p className="!py-2 text-gray-500 text-sm line-clamp-3">
                    {description}
                </p>

                <span className="text-xl text-gray-700 font-semibold">
                    {price} €
                </span>

                <p className="text-sm text-gray-500">
                    Quantité : {quantity}
                </p>

                {!cart && (
                    <div className="mt-3">
                        <Boutton
                            type="button"
                            size="30"
                            value="Ajouter"
                            onClick={onAdd}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartItem;
