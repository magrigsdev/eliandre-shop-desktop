import React, { useEffect, useState } from 'react'
import { useNavbar } from '../hooks/useNavbar'
import { useFetch } from '../hooks/useFetch'
import CartItem from '../components/cartItem'

const URLS = {
    GET_SACS: 'http://192.168.1.14:3000/api/sacs/',
}

const Category = () => {
    const [sacs, setSacs] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const { send } = useFetch()
    const { setOnglet } = useNavbar()

    /** Set active navbar tab */
    useEffect(() => {
        setOnglet('category')
    }, [setOnglet])

    /** Fetch sacs */
    useEffect(() => {
        const fetchSacs = async () => {
            try {
                const data = await send({
                    url: URLS.GET_SACS,
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
                    <div className="flex flex-wrap justify-start gap-6 w-full">
                        {sacsFiltered.map(sac => (
                            <CartItem
                                key={sac._id}
                                image={sac.image}
                                description={sac.description}
                                price={sac.prix}
                                titre={sac.libelle}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Category
