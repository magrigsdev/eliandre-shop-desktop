



const Cart = () =>{



    // Panier vide
    {/*if (isEmpty) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <p>le panier est vide</p>
                </div>
            </div>
        );
    } */}
    return (
        <div className="flex justify-center items-center bg-white " >
            <div className="grid grid-flows-row auto-rows-max">
                {/**  bloc 1 title   ***/}
                <div className="flex justify-start !mb-2 ">
                    {/**  bloc 1 logo and title   ***/}
                    <div className="flex flex-start gap-x-6 ">
                        <div className=" w-full gap-x-2">
                            <p className="desc">
                                Découvrez Eliandre Shop, votre boutique en ligne dédiée
                                à l'élégance et à la beauté.
                            </p>
                            <p className="text-base"> Nombre de produit :  0 </p>
                            <h3 className="text-base text-red-800"> TOTAL :  0 </h3>
                        </div>

                    </div>
                </div>

                {/**  bloc 2 subscribe columns  ***/}
                <div className="flex flex-flow h-full  rounded-2xl border-gray-300 w-250  border-1 !p-10">
                    <div className="flex flex-wrap justify-start gap-6 w-full ">

                    </div>
                </div>


                </div>
        </div>
    );
}
export default Cart
