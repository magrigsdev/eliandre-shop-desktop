import React, { useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch'
import CartItem from '../components/cartItem'
import useCart from "../hooks/useCart.js";
import useApp from "../hooks/useApp.js";




//sur mon mobile : 172.20.10.2
// à la maison : 192.168.1.14:3000
//à l'école : 172.16.18.188
const URLS = {
    GET_SACS: 'http://172.16.18.188:3000/api/sacs/',
    TEST_DB: 'http://172.16.18.188:3000/users/db',
}

const Category = () => {
    const [sacs, setSacs] = useState([])
   // const [searchValue, setSearchValue] = useState('')

    const {testValue} =  useApp()

    const { send } = useFetch()

    console.log('test de value sur app testValue', testValue)
    /** Fetch sacs */
    useEffect(() => {
        const fetchSacs = async () => {
            try {
                const data = await send({
                   url: URLS.GET_SACS,
                    //url:URLS.TEST_DB,
                    method: 'GET',
                })
                setSacs(data || [])
            } catch (error) {
                console.error('Error fetching sacs:', error)
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
