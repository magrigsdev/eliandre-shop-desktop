import { useEffect, useState } from "react";
import { useNavbar } from "../hooks/useNavbar";
import "../styles/inscription.css";
import { useLocation, useNavigate } from "react-router-dom";

const Inscription = () => {
    //init le hook
    const {setOnglet} = useNavbar()
    //page actuelle
    useEffect(()=>{setOnglet('inscription')})
    //navigation
    const route = useNavigate()

    //uptdate location
    const {pathname} = useLocation() 
    //useNavbar
    const {setLocation} = useNavbar()
    useEffect(()=>{setLocation(pathname)})

    // console.log("location sur inscription : ", location)

    // FORM MANAGEMENT *********
    //init formdata
    const [formData, setFormData] = useState({
        nom:'', prenom:'',
        telephone:'', password:'',
        confirmPassword:''
    })
    //errors
    const [errors, setErrors] = useState([])
    
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
                            <input type="text" placeholder="nom" required />

                            { errors.nom && <span className="error">{errors.nom} </span>}

                            <label>Prénom</label>
                            <input type="text" placeholder="prénom" required/>

                             { errors.prenom && <span className="error"> {errors.prenom} </span>}

                            <label>Téléphone</label>
                             <input type="text" placeholder="numéro" required/>

                            { errors.telephone && <span className="error">{errors.telephone} </span>}

                        </div>

                        <div className="right-form">

                            <label>Mot de passe</label>
                            <input type="password" placeholder="••••••••" required/>

                            {errors.password && <span className="error"> {errors.password} </span>}

                            <label>Confirmation de mot de passe</label>
                            <input type="password" placeholder="••••••••" required />

                            {errors.confirmPassword && <span className="error"> {errors.confirmPassword} </span>}

                            <div className="buttons">
                                <button 
                                    className="save-btn"
                                    //onClick={()=>console.log("restaure columns")}
                                    >Enregistrer</button>
                                <button className="back-btn">Retour</button>
                            </div>
                            <div>
                                <p className="down_text"> Déjà un compte ? <a className="down_text_sub"
                                    href=""
                                    onClick={()=>route('/connexion')}
                                    >  Se connecter</a>
                                </p>
                            </div>

                        </div>
                        

                    </div>

                </div>
            </>)
}
export default Inscription