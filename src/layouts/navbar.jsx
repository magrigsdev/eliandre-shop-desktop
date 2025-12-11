import { useNavigate } from 'react-router-dom'
import { useNavbar } from '../hooks/useNavbar'
import '../styles/navbar.css'

const Navbar = () => 
    {
        //variable for route
        const route = useNavigate()
        //init the customer hook 
        const {ongletManager, RouteManager} =  useNavbar()

        return (<>

            <nav className="navbar">
                <ul className="nav-list">
                    <li><a 
                        href='#'
                        onClick = {(e)=> RouteManager(e, '/accueil',route)}
                        style={ongletManager('accueil') === 'active' ? {color: 'teal'} : {}} 
                         >Accueil</a></li>

                    <li>
                        <a href=""
                        onClick={(e) => RouteManager(e,'/categorie', route)} 
                        style={ongletManager('categorie') === 'active' ? {color: 'teal'} : {}}
                    >Categorie</a></li>

                    <li><a href="" 
                    
                    onClick={(e) => RouteManager(e,'/panier',route)}
                    style={ongletManager('panier') === 'active' ? {color: 'teal'} : {}}
                    >Panier</a></li>

                    <li><a href="" 
                    
                    onClick={(e) => RouteManager(e,'/connexion',route)}
                    style={ongletManager('connexion') === 'active' ? {color: 'teal'} : {}}
                    >Connexion</a></li>

                    <li><a href=""
                     
                    onClick={(e) => RouteManager(e,'/inscription',route)}
                    style={ongletManager('inscription') === 'active' ? {color: 'teal'} : {}}
                    >Inscription</a></li>

                    <li><a href="#" 
                    
                    onClick={(e) => RouteManager(e,'/deconnexion',route)}
                    style={ongletManager('deconnexion') === 'active' ? {color: 'teal'} : {}}
                    >Déconnexion</a></li>
                </ul>
                <div className="divider"></div>
            </nav>
        </>)
    }
export default Navbar

