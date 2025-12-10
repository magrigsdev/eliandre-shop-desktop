import './styles/style.css'
import Navbar from './layouts/Navbar'
import Accueil from './components/accueil'
import Footer from './layouts/footer'
import { NavbarProvider } from './context/navbarProvider'



function App() {

  return (
        // <Bienvenue/>
        // <Connexion/>
      // <Inscription/>
     
      <>
        <NavbarProvider>
          <Navbar/>
          <Accueil/>
          <Footer/>
        </NavbarProvider>     
      </>
  )
}

export default App
