import { useEffect } from "react";
import { useNavbar } from "../hooks/useNavbar";
import "../styles/inscription.css";

const Inscription = () => {
    //init le hook
    const {setOnglet} = useNavbar()
    //page actuelle
    useEffect(()=>{setOnglet('inscription')})
    
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
                            <input type="text" placeholder="banzouzi" required />

                            <span className="error">Nom est requis</span>

                            <label>Prénom</label>
                            <input type="text" placeholder="andréa" required/>

                            <span className="error">Prénom est requis</span>

                            <label>Téléphone</label>
                            <input type="text" placeholder="Entrer le numéro" required/>

                            <span className="error">Le numéro est requis</span>

                        </div>

                        <div className="right-form">

                            <label>Mot de passe</label>
                            <input type="password" placeholder="••••••••" required/>

                            <span className="error">Mot de passe requis</span>

                            <label>Confirmation de mot de passe</label>
                            <input type="password" placeholder="••••••••" required />

                            <span className="error">Les mots de passe ne correspondent pas</span>

                            <div className="buttons">
                                <button className="save-btn">Enregistrer</button>
                                <button className="back-btn">Retour</button>
                            </div>
                            <div>
                                <span className="down_text">Déjà un compte 
                                <a className="down_text_sub"> Se connecter</a>
                                </span>
                            </div>

                        </div>
                        

                    </div>

                </div>
            </>)
}
export default Inscription