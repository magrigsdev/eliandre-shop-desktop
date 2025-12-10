import '../styles/navbar.css'

const Navbar = () => 
    {
        
        return (<>

            <nav class="navbar">
                <ul className="nav-list">
                    <li><a href="#accueil" className=''>Accueil</a></li>
                    <li><a href="#categorie" className=''>Categorie</a></li>
                    <li><a href="#panier" className=''>Panier</a></li>
                    <li><a href="#déconnexion" className=''>Déconnexion</a></li>
                </ul>
                <div className="divider"></div>
            </nav>
        </>)
    }
export default Navbar