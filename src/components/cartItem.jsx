import React from 'react';
import {Boutton} from "./boutton.jsx";



function CartItem({titre, price, quantity, image, description, callBack}) {
    return (
        <div className=" rounded-2xl w-100 flex flex-row border-gray-300   border-1 !p-2 gap-0 !mr-4">
            {/** image **/}
            <div className="basic 1/3 !p-2 ">
                <img
                    className="w-40 h-60"
                    alt=""
                    src={`${image === undefined ? "https://img01.ztat.net/article/spp-media-p1/5823dc9dd03a48658730b63623db9ed6/1ee1c21c5bb64658a17e8adcfc9e3ca8.jpg?imwidth=1800&filter=packshot" : image}`}/>
            </div>
            {/** text **/}
            <div className="basic 2/3 w-40 h-40 !p-1">

                <h3 className="text-sm">{`${titre === undefined ? "BOWLING EN IRISÉ PRINCESSE GLOW - Sac à main - noir" : titre}`}</h3>
                <p className="!py-2 text-gray-500 text-sm"> {`${description === undefined ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry." : description}`}  </p>
                <span className="text-sm text-gray-500"> {`${price === undefined ? "0 €" : price}`} </span>
                <p  className="text-sm text-gray-500">{`${quantity === undefined ? "0" : quantity}`}</p>
                <p  className="text-sm text-gray-500"><Boutton  size="30" value="Ajouter" /></p>

            </div>

        </div>
    );
}

export default CartItem;