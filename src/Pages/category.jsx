import React, { useEffect, useState} from 'react'
import { useFetch } from '../hooks/useFetch'
import useCart from "../hooks/useCart.js";
import {Texts} from "../Constants/texts.js";
import Body from "../components/Body.jsx";
import CategoryBanner from "../components/category/categoryBanner.jsx";
import CategoryList from "../components/category/categoryList.jsx";

const Category = () => {
    //initiation des variables  et constants
    const [sacs, setSacs] = useState([])
    const [searchValue, setSearchValue] = useState()

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

    /** Filter produit */
       const ProduitFiltered = sacs.filter(sac =>
            sac.libelle?.toLowerCase().includes(searchValue)
        )
    //******************** CART MANAGE
    const {addToCart} = useCart()


    return (
        <div className="flex justify-center items-center bg-white">
            <div className="grid grid-flow-row auto-rows-max">

                <Body
                    /* le banner */
                    Banner={<CategoryBanner count={sacs.length}  />}
                    /* list de produits : sacs */
                     Bloc1={
                        <CategoryList
                            produits={sacs}
                            //onAdd={}
                    />} />
            </div>
        </div>
    )
}

export default Category
