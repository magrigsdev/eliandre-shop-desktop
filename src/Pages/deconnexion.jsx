
import  { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar.js'

 const Deconnexion = () => {
  //call onglet from custom hook
  const {setOnglet} =  useNavbar()
  //update onglet for current page name
  useEffect(()=>{setOnglet('deconnexion'); })

  return (
    <div>
      deconnexion page 
    </div>
  )
}
export default Deconnexion
