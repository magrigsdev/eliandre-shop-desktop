import './styles/style.css'
import { NavbarProvider } from './context/navbarProvider'
import { Browers } from './routes/Browers'
import './App.css'

function App() {

  return (
        <NavbarProvider>
          <Browers/>
        </NavbarProvider>     
  )
}

export default App
