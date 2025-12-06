
const Footer = () => 
    {
        let year =  new Date().getFullYear()
        
        return (<>
            <style>
                {`
   
                    /* 1. Conteneur de la Navigation (Modification ici) */
                    .footer {
                       
                        width: 80%; 
                        margin-left: auto;
                        margin-right: auto;
                        background-color: #fff; 
                        padding: 15px 0 0 0;
                    }

                    /* 2. Liste des Éléments (inchangé, ils restent centrés dans le .navbar) */
                    .footer-container {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        
                        display: flex;
                        justify-content: center; 
                        gap: 40px; 
                    }

                    /* 3. Style des Liens (inchangé) */
                    .footer-container  p {
                        text-decoration: none; 
                        color: #A3A3A3; 
                        font-size: 16px;
                        padding: 5px 10px;
                        display: block;
                        transition: color 0.3s;
                    }

                    /* 4. La Barre de Séparation Grise (Elle ne s'étend plus qu'à 1200px max) */
                    .dividers {
                        width: 100%; /* S'étend sur la largeur maximale du .navbar */
                        height: 1px;
                        background-color: #ddd; 
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    
                    
                `}
            </style>

            <nav class="footer">
                <div class="dividers"></div>
                <span class="footer-container">
                   
                    <p>&copy; { year }  Eliandre. Tous droits réservés.</p>
                </span>
                
            </nav>
        </>)
    }
export default Footer