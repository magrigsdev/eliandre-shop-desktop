import { useEffect, useState} from "react";
import { useNavbar } from "../hooks/useNavbar";
import "../styles/inscription.css";
import { useLocation, useNavigate } from "react-router-dom";
import {useForm} from "../hooks/useForm.js";

const Inscription = () => {
    //init le hook
    const {setOnglet} = useNavbar() // set current page
    const {handleOnChange, onFormValidation} = useForm() //for use form
    const {setLocation} = useNavbar() // for navbar
    const {pathname} = useLocation() // update location
    const route = useNavigate() // route manage

    //init variables*
    const [formData, setFormData] = useState({
        nom:'',
        prenom:'',
        telephone:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState([]) //erreors

    //useEffect
    useEffect(()=>{
        setLocation(pathname);
        setOnglet('inscription')
    },[pathname,setOnglet, setLocation])

    // FORM MANAGEMENT *********
    const validation = onFormValidation(formData,setErrors)
    //init formData

    //errors

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        const submit = validation

    }
    //console.log(formData) onFormValidation


    return (<>
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
                             <input type="text"
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