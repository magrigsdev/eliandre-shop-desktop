
const Footer = () => 
    {
        let year =  new Date().getFullYear()
        
        return (<>
            <style>
                {`
                    
                    
                    /* 1. Conteneur de la Navigation (Modification ici) */
                    .navbar {
                        /* Largeur maximale pour éviter qu'elle ne soit trop étirée */
                        
                        width: 80%; /* Occupe 90% de la largeur disponible (pour les petits écrans) */
                        
                        /* Centre le bloc entier horizontalement */
                        margin-left: auto;
                        margin-right: auto;
                        
                        background-color: #f8f8f8; 
                        padding: 15px 0 0;
                    }

                    /* 2. Liste des Éléments (inchangé, ils restent centrés dans le .navbar) */
                    .nav-list {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        
                        display: flex;
                        justify-content: center; 
                        gap: 40px; 
                    }

                    /* 3. Style des Liens (inchangé) */
                    .nav-list  p {
                        text-decoration: none; 
                        color: #A3A3A3; 
                        font-size: 16px;
                        padding: 5px 10px;
                        display: block;
                        transition: color 0.3s;
                    }

                    
                    

                    /* 4. La Barre de Séparation Grise (Elle ne s'étend plus qu'à 1200px max) */
                    .divider {
                        width: 100%; /* S'étend sur la largeur maximale du .navbar */
                        height: 1px;
                        background-color: #ddd; 
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    
                    
                `}
            </style>

            <nav class="navbar">
                <div class="divider"></div>
                <span class="nav-list">
                   
                    <p>&copy; { year }  Eliandre. Tous droits réservés.</p>
                </span>
                
            </nav>
        </>)
    }
export default Footer