import React, {Component} from 'react';
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
import accueil from "../assets/accueil.jpg"
const Home  = () => {

        return (
            <div className="flex justify-center items-center bg-white " >
                <div className="grid grid-flows-row auto-rows-max">
                    {/**  bloc 1 title   ***/}
                    <div className="flex justify-start !mb-2 ">
                        {/**  bloc 1 logo and title   ***/}
                        <div className="flex flex-start gap-x-6 ">
                            <div className="mt-2 w-180 gap-x-2 !py-6">
                                <p className="text-base"> Salut ! welcome to Eliandre shop</p>
                            </div>
                        </div>
                    </div>

                    {/**  bloc 2 subscribe columns  ***/}

                        <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">
                            <div className="flex justify-center !mb-2">
                                <img
                                    src={accueil}
                                    alt="EliandreShop Logo"
                                    className="img w-100 h-100"/>
                            </div>
                        </div>


                </div>
            </div>
        );
}
export default Home
