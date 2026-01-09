import React, { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar.js'
import accueil from "../assets/accueil.jpg";
import {useFetch} from "../hooks/useFetch.js";
import CartItem from "../components/cartItem.jsx";

const Category = () => {
    //urls
    const urls = {
        'test_de_connexion' : 'http://192.168.1.14:3000/api/users/db',
        'getSacs': 'http://192.168.1.14:3000/api/sacs',
    }
    //use effect
    const { send, errorAPI , data} = useFetch() // fetch api

    const {setOnglet} =  useNavbar()

  useEffect(()=>{setOnglet('categorie');})
    // test de Connection inscription page
    useEffect(()=>{
        //test connection
        let testDB = {}
        const testConnection = async () => {
            testDB = await send({
                url : urls.test_de_connexion,
                method: 'GET', })
            console.log('test_de_connexion page connexion data : ', testDB) }
        testConnection()
    },[])
    return (
        <div className="flex justify-center items-center bg-white " >
            <div className="grid grid-flows-row auto-rows-max">

                {/**  bloc 1 title   ***/}
                <div className="flex justify-start !mb-2 ">
                    {/**  bloc 1 logo and title   ***/}
                    <div className="flex flex-start gap-x-6 ">
                        <div className="mt-2 w-180 gap-x-2 !py-6">
                            <p className="text-base"> Salut ! LES PRODUITS CATEGORY</p>
                        </div>
                    </div>
                </div>

                {/**  bloc 2 subscribe columns  ***/}
                <div className="flex flex-flow h-full  rounded-2xl border-gray-300 w-250  border-1 !p-10">
                    <div className="flex flex-wrap justify-start gap-6 w-full ">
                        <CartItem image="https://img01.ztat.net/article/spp-media-p1/a658f0f421494a88a3ef0d2121ecedaa/96c918e392f6488d899082cca82d428e.jpg?imwidth=1800&filter=packshot"/>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Category

