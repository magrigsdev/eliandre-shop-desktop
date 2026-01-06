import { useEffect, useState } from "react"
import { useNavbar } from "../hooks/useNavbar.js"
import { useLocation, useNavigate } from "react-router-dom"
import "../styles/connexion.css"


const Connexion = () => {

        //init le hook
        const {setOnglet} = useNavbar() 
        //page actuelle
        useEffect(()=>{setOnglet('connexion')})
        //navigation
        const route = useNavigate()

        //uptdate location
        const {pathname} = useLocation()
        //useNavbar
        const {setLocation} = useNavbar()
        useEffect(()=>{setLocation(pathname)})

        //formulaire
        //init 
        const [form, setForm] = useState({email:'', password:''})
        
         const handleOnsubmit = () => {
            console.log("submit")
         }
         
   return (<>

        <div className="container">
        <div className="card">

            <div className="left">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
                alt="EliandreShop Logo" 
                className="logo" />
            </div>

            <div className="right">
                <h2>Bienvenue sur Eliandre shop</h2>
                <p className="desc">
                    Découvrez Eliandre Shop, votre boutique en ligne dédiée
                    à l'élégance et à la beauté.
                </p>

                <form className="form" method="post">
                    <label>Nom</label>
                    <input type="email" placeholder="Email" />
                    <span className="error">Email incorrect ou invalid</span>

                    <label>Mot de passe </label>
                    <input type="password" placeholder="••••••••" />
                    <span className="error">Email incorrect ou invalid</span>

                    <button 
                    onClick={()=>handleOnsubmit}
                    type="submit">Connexion</button>
                </form>

                <p className="signup">
                    Pas de compte ? <a 
                    href=""
                    onClick={()=>route('/inscription')}
                    >S’inscrire</a>
                    
                </p>
            </div>

        </div>
    </div>
   </>
    
   ) 
}
export default Connexion