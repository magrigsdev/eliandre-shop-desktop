import { useEffect, useState} from "react";
import { useNavbar } from "../hooks/useNavbar";
import "../styles/inscription.css";
import { useLocation, useNavigate } from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {useFetch} from "../hooks/useFetch.js";
import bienvenue from "../assets/bienvenue.jpg";

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

                {/**  bloc    ***/}
                <div className="flex justify-start !mb-2 ">
                    {/**  bloc 1 logo and title   ***/}
                    <div className="flex flex-start gap-x-6 ">
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                alt="EliandreShop Logo"
                                className="img w-20 h-20" />
                        </div>


                        <div className="mt-2 w-180 gap-x-2 ">
                            <h2 className=" text-2xl font-bold">Bienvenue sur Eliandre shop</h2>
                            <p className="text-base">Créez votre profil pour découvrir nos perruques, conseils beauté et nouveautés tendance.</p>
                        </div>

                    </div>

                </div>
                {/**  bloc 2 subscribe columns  ***/}

                <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">
                    <div className="flex justify-center ">

                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                             alt="EliandreShop Logo"
                             className="img w-20 h-20" />
                    </div>
                    <div className="flex justify-center"> <h2>Bienvenue sur Eliandre shop</h2>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-3xs">Découvrez Eliandre Shop, votre boutique en ligne dédiée à l'élégance et à la beauté.</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={bienvenue} alt="" />
                    </div>
                    <div className="flex justify-center !mt-4">
                        <button
                            className="w-100 text-teal-600 items-center justify-center  border-teal"
                            type="button"
                            onClick={()=>route('./connexion')}> Commencez</button>
                    </div>
                </div>
                </div>

            </div>

        {/* subscribe columns*/}

            <div className="page-container">

                    <div className="header">
                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Eliandre Shop Logo" className="logo" />
                        <div className="header-text">
                            <h2>Bienvenue sur Eliandre shop</h2>
                            <p>Créez votre profil pour découvrir nos perruques, conseils beauté et nouveautés tendance.</p>
                        </div>
                    </div>

                    <div className="form-container">

                        <div className="left-form">

                            <label>Nom</label>
                            <input type="text"
                                   value={formData.nom}
                                   onChange={(e)=>handleOnChange('nom',e.target.value,setFormData, setErrors)}
                                   placeholder="nom"
                                   required />

                            { errors.nom && <span className="error">{errors.nom} </span>}

                            <label>Prénom</label>
                            <input type="text"
                                   placeholder="prénom"
                                   value={formData.prenom}
                                   onChange={(e)=>handleOnChange('prenom', e.target.value, setFormData, setErrors)}
                                   required
                            />

                             { errors.prenom && <span className="error"> {errors.prenom} </span>}

                            <label>Téléphone</label>
                             <input type="number"
                                    placeholder="numéro"
                                    value={formData.telephone}
                                    onChange={(e)=>handleOnChange('telephone', e.target.value, setFormData, setErrors)}
                                    required/>

                            { errors.telephone && <span className="error">{errors.telephone} </span>}

                        </div>

                        <div className="right-form">

                            <label>Mot de passe</label>
                            <input type="password" placeholder="••••••••" required
                            value={formData.password}
                            onChange={(e)=>handleOnChange('password', e.target.value, setFormData, setErrors)}/>

                            {errors.password && <span className="error"> {errors.password} </span>}

                            <label>Confirmation de mot de passe</label>
                            <input type="password"
                                   placeholder="••••••••"
                                   value={formData.confirmPassword}
                                   onChange={(e)=>handleOnChange('confirmPassword', e.target.value, setFormData, setErrors)}
                                   required
                            />

                            {errors.confirmPassword && <span className="error"> {errors.confirmPassword} </span>}

                            <div className="buttons">
                                <button
                                    className="save-btn"
                                    onClick={(e)=>{ onSubmit(e)}}
                                    >Enregistrer</button>
                                <button className="back-btn">Retour</button>
                            </div>
                            <div>
                                <p className="down_text"> Déjà un compte ? <a className="down_text_sub"
                                    href=""
                                    onClick={()=>{console.log('retours se connecter')}}>  Se connecter</a>
                                </p>
                            </div>

                        </div>


                    </div>

                </div>
            </>)
}
export default Inscription