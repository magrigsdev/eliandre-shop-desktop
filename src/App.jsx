import './styles/style.css'
import Navbar from './layouts/Navbar'
import Accueil from './components/accueil'
import Footer from './layouts/footer'
import { NavbarProvider } from './context/navbarProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bienvenue from './components/bienvenue'
import Connexion from './components/connexion'
import Inscription from './components/inscription';



function App() {

  return (
        
      <>
      
        <NavbarProvider>

          <BrowserRouter>
            <Navbar/>
            <Routes>
            
              <Route path="/" element={ <Bienvenue /> }  />
              <Route path="/accueil" element={ <Accueil /> }  />
              <Route path="/connexion" element={ <Connexion/> }  />
              <Route path="/inscription" element={ <Inscription/> }  />

            </Routes>
            <Footer/>

          </BrowserRouter>
        </NavbarProvider>     
      </>
  )
}

export default App
