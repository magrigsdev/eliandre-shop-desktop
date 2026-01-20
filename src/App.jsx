import './styles/style.css'
import { NavbarProvider } from './context/navbarProvider'
import { Browers } from './routes/Browers'
import './App.css'
import CartProvider from "./context/cartProvider.jsx";
import {PanierProvider} from "./context/panierProvider.jsx";

function App() {

  return (
      // provider pour panier
      <PanierProvider>
          {/* pour la navigation entre pages */}
          <Browers/>
      </PanierProvider>

  )
}

export default App
