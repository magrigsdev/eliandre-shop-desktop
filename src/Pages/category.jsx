import React, { useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch'
import CartItem from '../components/cartItem'
import useCart from "../hooks/useCart.js";
import {Texts} from "../Constants/texts.js";
import Body from "../components/Body.jsx";
import CategoryBanner from "../components/category/categoryBanner.jsx";
import CategoryList from "../components/category/categoryList.jsx";

const Category = () => {
    //initiation des variables  et constants
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
                console.log("data : ",data)
                setSacs(data || [])
            } catch (error) {
                console.error(Texts.ERREUR_DB, error)
            }
        }
        fetchSacs()
    }, [])

    /** Filter sacs */
       /** const sacsFiltered = sacs.filter(sac =>
            sac.libelle?.toLowerCase().includes(searchValue.toLowerCase())
        )*/
    //******************** CART MANAGE
    const {addToCart} = useCart()

    return (
        <div className="flex justify-center items-center bg-white">
            <div className="grid grid-flow-row auto-rows-max">

                <Body
                    /* le banner */
                    Banner={<CategoryBanner count={sacs.length}  />}
                    /* liste de produits : sacs */
                    Bloc1={
                        <CategoryList
                            produits={sacs} onAdd={addToCart}
                    />} />
            </div>
        </div>
    )
}

export default Category
