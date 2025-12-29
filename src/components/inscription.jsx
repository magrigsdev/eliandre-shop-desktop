import { useEffect, useState} from "react";
import { useNavbar } from "../hooks/useNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {useFetch} from "../hooks/useFetch.js";
import {Field} from "./field.jsx";
import {Boutton} from "./boutton.jsx";

const Inscription = () => {
    //init le hook
    const {setOnglet} = useNavbar() // set current page
    const {handleOnChange, onFormValidation, columnValidate} = useForm() //for use form
    const {setLocation} = useNavbar() // for navbar
    const {pathname} = useLocation() // update location
    //const route = useNavigate() // route manage
    const {send, loading, error} = useFetch()

    //init variables*
    const [formData, setFormData] = useState({
        nom:'',
        prenom:'',
        telephone:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState([]) //errors

    //useEffect
    useEffect(()=>{
        setLocation(pathname);
        setOnglet('inscription')
    },[pathname,setOnglet, setLocation])

    // FORM MANAGEMENT *********

    //init formData

    const onSubmit = (e) => {

        e.preventDefault()
        //columnValidate(formData.nom) !== '' ?

        console.log(formData)
        const result = onFormValidation(formData, setErrors)
        console.log(result)


    }
    //console.log(formData) onFormValidation

    return (<>
                <div className="flex justify-center items-center bg-white w-screen" >
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
                                    <h2 className=" text-2xl font-bold">Bienvenue sur Eliandre shop</h2>
                                    <p className="text-base">Créez votre profil pour découvrir nos perruques, conseils beauté et
                                        nouveautés tendance.</p>
                                </div>

                            </div>

                        </div>

                        {/**  bloc 2 subscribe columns  ***/}
                        <form onSubmit={onSubmit} method="POST">
                            <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">

                                <div className="flex justify-start gap-x-5 !mb-4">
                                    <Field name="Nom"  width="w-60"/>
                                    <Field name="Mot de passe"  width="w-60"/>
                                </div>

                                <div className="flex justify-start gap-x-4 !mb-4">
                                    <Field name="Prénom"  width="w-60"/>
                                    <Field name="Confirmation de mot de passe"  width="w-60"/>
                                </div>

                                <div className="flex justify-start !mb-4">
                                    <Field name="Téléphone"  width="w-60"/>
                                </div>
                                <div className="flex justify-start !mb-4 gap-x-16">
                                    <Boutton value='Effacer' size='50' restore='true'/>
                                    <Boutton value='Enregistrer' size='50'/>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>


            </>)
}
export default Inscription