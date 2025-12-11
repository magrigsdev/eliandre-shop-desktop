import  { useEffect } from 'react'
import { useNavbar } from '../hooks/useNavbar'

const Categorie = () => { 
  const {setOnglet} =  useNavbar()

  useEffect(()=>{setOnglet('categorie');})
    
  return (
    <div>
        categorie
    </div>
  )
}
export default Categorie

