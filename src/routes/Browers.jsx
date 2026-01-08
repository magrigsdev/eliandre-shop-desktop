import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../layouts/Navbar"
import Bienvenue from "../Pages/bienvenue.jsx"
import Accueil from "../Pages/accueil.jsx"
import Connexion from "../Pages/connexion.jsx"
import Inscription from "../Pages/inscription.jsx"
import Deconnexion from "../Pages/deconnexion.jsx"
import Categorie  from "../Pages/categorie.jsx"
import Panier from "../Pages/panier.jsx"
import Footer from "../layouts/footer"
import { useNavbar } from "../hooks/useNavbar"


export const Browers = ()=> {
    //init use
    const { NavbarManager} = useNavbar()
    //useEffect(()=>{setLocation(location)})
    //init uselocation
   // console.log("location sur browers ", location)
  return (
    
    <BrowserRouter> 
    {NavbarManager(<Navbar/>)}
                   
        
            <Routes>
            
              <Route path="/" element={ <Bienvenue /> }  />
              <Route path="/accueil" element={ <Accueil /> }  />
              <Route path="/connexion" element={ <Connexion/> }  />
              <Route path="/inscription" element={ <Inscription/> }  />
              <Route path="/deconnexion" element={<Deconnexion/> }  />
              <Route path="/categorie" element={<Categorie/> }  />
              <Route path="/panier" element={<Panier /> }  />

            </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
