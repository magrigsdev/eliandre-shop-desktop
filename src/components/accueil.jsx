import accueil from "../assets/accueil.jpg"
import sac_noire from "../assets/sac_noire.png"
import sac_rose from "../assets/sac_orange.png"
const Accueil = () => {
    return (
            <>
                        <style>
                            {`
                           
                            
                                /* ---- Container ---- */
                                .container {
                                    min-height: 100vh;
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    padding: 20px;

                                }
            
                                /* ---- Card ---- */
                                .card {
                                    width: 800px;
                                    background: white;
                                    padding: 40px;
                                   
                                    text-align: center;
                                    
            
                                /* ---- Logo ---- */
                                .logoBox {
                                    display: flex;
                                    justify-content: center;
                                    margin-bottom: 15px;
                                }
            
                                .logo {
                                    width: 100px;
                                    height: 100px;
                                }
            
                                /* ---- Text ---- */
                                .salut {
                                    font-size: 20px;
                                    font-weight: 700;
                                    margin-bottom: 10px;
                                    color: #111;
                                }
                                .username{
                                    font-size: 20px;
                                    color:teal;
                                    font-weight:100;
                                }
            
                                .subtitle {
                                    font-size: 13px;
                                    color: #444;
                                    margin-bottom: 25px;
                                }
            
                                /* ---- Illustration ---- */
                                .illustration {
                                    width: 100%;
                                    max-width: 330px;
                                    margin: 0 auto 25px;
                                    display: block;
                                    height: 250px;
                                }
            
                                
            

                                /*** image   ***/
                                /* 1. Conteneur principal (Active Flexbox) */
                                .gallery {
                                    display: flex;
                                    /* Aligner les éléments au centre s'il y a de l'espace */
                                    justify-content: center; 
                                    /* Gère le wrapping si l'écran est trop petit */
                                    flex-wrap: wrap; 
                                    gap: 30px; /* Espace entre les deux images */
                                    padding: 0px;
                                }

                                /* 2. Style des Conteneurs Figure */
                                .image-item {
                                    /* Permet aux deux figures de prendre une largeur relative */
                                    width: 45%; 
                                    /* Optionnel: pour s'assurer qu'elles ont la même taille */
                                    width: 100px; 
                                    
                                    margin: 0; /* Réinitialiser la marge par défaut de <figure> */
                                    text-align: center; /* Centre la légende et l'image */
                                }

                                /* 3. Style des Images (pour s'assurer qu'elles s'adaptent) */
                                .image-item img {
                                    width: 80px; 
                                    height: 80px;
                                    display: block; /* Supprime les espaces blancs sous l'image */
                                }

                                /* 4. Style des Légendes */
                                .image-item figcaption {
                                    margin-top: 4px;
                                    font-size: 0.9em;
                                    color: #555;
                                    font-style: italic;
                                }
                            
                            `}
                        </style>
            
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
                                <div class="gallery">
                                    <figure class="image-item">
                                        <img src={sac_rose} alt="Description de l'image 1"/>
                                        <figcaption>Sac rose</figcaption>
                                    </figure>

                                    <figure class="image-item">
                                        <img src={sac_noire} alt="Description de l'image 2"/>
                                        <figcaption>Sac noire</figcaption>
                                    </figure>
                                </div>
            
                            </div>
                        </div>
                    </>)
}
export default Accueil