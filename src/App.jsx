import './styles/style.css'

import { Browers } from './routes/Browers'
import './App.css'
import AppProvider from "./context/AppProvider.jsx";


function App() {

  return (
      // provider pour App
      <AppProvider>
          {/* pour la navigation entre pages */}
          <Browers/>
     </AppProvider>
  )
}

export default App
