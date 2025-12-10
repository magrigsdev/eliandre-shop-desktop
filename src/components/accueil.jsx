import { useEffect } from "react"
import accueil from "../assets/accueil.jpg"
import sac_noire from "../assets/sac_noire.png"
import sac_rose from "../assets/sac_orange.png"
import { useNavbar } from "../hooks/useNavbar"

import '../styles/accueil.css'

const Accueil = () => {
    const {ongletManager, setOnglet, onglet} =  useNavbar()

    useEffect(
        ()=>{
            setOnglet('accueil');    
        })
    console.log("test onglet manager", ongletManager(onglet))
    
    return (
                <>
                    <div className="container">
                                <div className="card">
                
                                    <div className="logoox">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
                                        alt="logo" className="logo"/>
                                    </div>
                
                                    <span className="salut">Salut ! </span><span className="username"> Andréa </span>
                
                                    
                                    <div className="logoox">
                                        <img src={accueil} 
                                        alt="logo" className="illustration"/>
                                    </div>
                                    <p className="subtitle">
                                        Les incontournables Eliandre Shop
                                    </p>
                                    <div className="gallery">
                                        <figure className="image-item">
                                            <img src={sac_rose} alt="Description de l'image 1"/>
                                            <figcaption>Sac rose</figcaption>
                                        </figure>

                                        <figure className="image-item">
                                            <img src={sac_noire} alt="Description de l'image 2"/>
                                            <figcaption>Sac noire</figcaption>
                                        </figure>
                                    </div>
                
                                </div>
                    </div>
                </>
            )

}
export default Accueil
