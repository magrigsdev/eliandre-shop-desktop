import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../layouts/Navbar"
import Bienvenue from "../components/bienvenue"
import Accueil from "../components/accueil"
import Connexion from "../components/connexion"
import Inscription from "../components/inscription"
import Deconnexion from "../components/deconnexion"
import Categorie  from "../components/categorie"
import Panier from "../components/panier"
import Footer from "../layouts/footer"
import { useNavbar } from "../hooks/useNavbar"
import Test from "../components/test"


export const Browers = ()=> {
    //init use
    const {location, NavbarManager} = useNavbar()
    
    // useEffect(()=>{setLocation(location)})
    //init uselocation
    console.log("location sur browers ", location)
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
