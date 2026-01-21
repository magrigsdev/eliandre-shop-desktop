import React, { useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch'
import CartItem from '../components/cartItem'
import useCart from "../hooks/useCart.js";
import {Texts} from "../Constants/texts.js";

const Category = () => {
    //initiation des variables  et constantes
    const [sacs, setSacs] = useState([])

    //appel au hooks
    const { send } = useFetch()

    /** Fetch sacs */
    useEffect(() => {
        const fetchSacs = async () => {
            try {
                const data = await send({
                   url: Texts.URLS.GET_SACS,
                    //url:URLS.TEST_DB,
                    method: 'GET',
                })
                setSacs(data || [])
            } catch (error) {
                console.error(Texts.ERREUR_DB, error)
            }
        }

        fetchSacs()
    }, [])

    /** Filter sacs */
        const sacsFiltered = sacs.filter(sac =>
            sac.libelle?.toLowerCase().includes(searchValue.toLowerCase())
        )
    //******************** CART MANAGE
    const {addToCart, cartItems, totalItems} = useCart()
    console.log('le totale : ',totalItems)
    console.log('le carte items : ',cartItems)


    let Test = {}

    return (
        <div className="flex justify-center items-center bg-white">
            <div className="grid grid-flow-row auto-rows-max">

                {/* Title */}
                <div className="flex justify-between !mb-2">
                    <p className="text-base text-teal-800">
                        NOMBRE DE SACS ( {sacsFiltered.length} )
                    </p>
                    <p className="text-base text-red-800">
                        PANIER - CART (0)
                    </p>
                    <p className="text-base text-teal-800">
                        Recherche
                    </p>
                </div>

                {/* Sacs list */}
                <div className="flex h-full rounded-2xl border border-gray-300 !p-10 w-250">
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {sacsFiltered.map(sac => (
                            <CartItem
                                key={sac._id}
                                image={sac.image}
                                description={sac.description}
                                price={sac.prix}
                                titre={sac.libelle}
                                onClick={()=> addToCart(sac)}
                            />

                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category
