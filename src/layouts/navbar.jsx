
import '../styles/navbar.css'

const Navbar = () => 
    {
    
        return (<>

            <nav class="navbar">
                <ul class="nav-list">
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#categorie">Categorie</a></li>
                    <li><a href="#panier">Panier</a></li>
                    <li><a href="#déconnexion">Déconnexion</a></li>
                </ul>
                <div class="divider"></div>
            </nav>
        </>)
    }
export default Navbar