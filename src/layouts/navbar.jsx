


const Navbar = () => {
    return (<>
        <style>
            {`
                header {
                    background-color: white;
                    padding: 15px 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    width:100%;
                    border-bottom:1 px solid ;
                    display:flex;
                }

                nav ul {
                    display: flex;
                    justify-content: center;
                    list-style: none;
                }

                nav ul li {
                    margin: 0 20px;
                }

                nav ul li a {
                    text-decoration: none;
                    color: #555;
                    font-weight: 500;
                }
                nav ul li a .active {
                    text-decoration: none;
                    color: teal;
                    font-weight: 500;
                }
            `}
        </style>

        <header>
            <nav>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Catégories</a></li>
                    <li><a href="#">Panier</a></li>
                    <li><a href="#">Déconnexion</a></li>
                </ul>
            </nav>
        </header>
        <hr />
    </>)
}
export default Navbar