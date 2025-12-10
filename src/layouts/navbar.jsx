import { useNavbar } from '../hooks/useNavbar'
import '../styles/navbar.css'

const Navbar = () => 
    {
        
        const {ongletManager} =  useNavbar()
 
        return (<>

            <nav class="navbar">
                <ul className="nav-list">
                    <li><a 
                    
                        href=""
                        style={ongletManager('accueil') === 'active' ? {color: 'teal'} : {}} 
                         >Accueil</a></li>

                    <li>
                        <a href="#categorie" 
                    style={ongletManager('categorie') === 'active' ? {color: 'teal'} : {}}
                    >Categorie</a></li>

                    <li><a href="#panier" 
                    style={ongletManager('panier') === 'active' ? {color: 'teal'} : {}}
                    >Panier</a></li>

                    <li><a href="#connexion" 
                    style={ongletManager('connexion') === 'active' ? {color: 'teal'} : {}}
                    >Connexion</a></li>

                    <li><a href="#inscription" 
                    style={ongletManager('inscription') === 'active' ? {color: 'teal'} : {}}
                    >Inscription</a></li>

                    <li><a href="#déconnexion" 
                    style={ongletManager('deconnexion') === 'active' ? {color: 'teal'} : {}}
                    >Déconnexion</a></li>
                </ul>
                <div className="divider"></div>
            </nav>
        </>)
    }
export default Navbar

