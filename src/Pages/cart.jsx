
import useApp from "../hooks/useApp.js";
import CategoryList from "../components/category/categoryList.jsx";
import React from "react";
import Body from "../components/Body.jsx";


const Cart = () =>{

    const cart = true
    const {objectCart} = useApp()
    // Panier vide

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <Body
                        Bloc1={<Title nombre={objectCart.numberProduit}
                                      total={objectCart.total} /> }
                        Bloc2={
                            <CategoryList
                                produits={objectCart.cartProduitsObject}
                                cart={cart}
                            />
                        }

                    />
                </div>
            </div>
        );





        /*
        <div className="flex justify-center items-center bg-white " >
            <div className="grid grid-flows-row auto-rows-max">

    <div className="flex justify-start !mb-2 ">

        <div className="flex flex-start gap-x-6 ">
            <div className=" w-full gap-x-2">
                <p className="desc">
                    Découvrez Eliandre Shop, votre boutique en ligne dédiée
                    à l'élégance et à la beauté.
                </p>
                <p className="text-base"> Nombre de produit : {objectCart.numberProduit} </p>
                <h3 className="text-base text-red-800"> TOTAL :  {objectCart.total} </h3>
            </div>

        </div>
    </div>


    <div className="flex flex-flow h-full  rounded-2xl border-gray-300 w-250  border-1 !p-10">
        <div className="flex flex-wrap justify-start gap-6 w-full ">

            <CategoryList
                produits={objectCart.cartProduitsObject}
                cart={cart}
            />
        </div>
    </div>


</div>
</div>
        */


}
export default Cart;

const Title = ({nombre, total}) => {
    //objectCart.numberProduit
    //objectCart.total
    return (
        <>
            <p className="desc">
                Découvrez Eliandre Shop, votre boutique en ligne dédiée
                à l'élégance et à la beauté.
            </p>
            <p className="text-base"> Nombre de produit : {nombre} </p>
            <h3 className="text-base text-red-800"> TOTAL :  {total} </h3>
        </>
    )
}
