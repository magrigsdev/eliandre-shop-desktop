import React, {Component} from 'react';
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";

const Home  = () => {

        return (
            <div className="flex justify-center items-center bg-white " >
                <div className="grid grid-flows-row auto-rows-max">
                    {/**  bloc 1 title   ***/}
                    <div className="flex justify-start !mb-2 ">
                        {/**  bloc 1 logo and title   ***/}
                        <div className="flex flex-start gap-x-6 ">
                            <div>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                    alt="EliandreShop Logo"
                                    className="img w-20 h-20"/>
                            </div>


                            <div className="mt-2 w-180 gap-x-2 ">
                                <p className="text-base"> Salut !</p>
                            </div>


                        </div>

                    </div>

                    {/**  bloc 2 subscribe columns  ***/}
                    <form  method="POST">
                        <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">



                        </div>
                    </form>

                </div>
            </div>
        );
}
export default Home
