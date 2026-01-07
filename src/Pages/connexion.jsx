
import "../styles/connexion.css"
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
import {useNavbar} from "../hooks/useNavbar.js";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Connexion = () => {
    const {setLocation, setOnglet} = useNavbar() // for navbar
    const {pathname} = useLocation() // update location
    const route = useNavigate() // route manage


    //useEffect for location and current page
    useEffect(()=>{
        setLocation(pathname);
        setOnglet('connexion') //
    },[pathname,setOnglet, setLocation])
/*
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
         }*/
      /*
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
    
   ) */
    return <div className="flex justify-center items-center bg-white w-screen" >

            <div className="grid grid-flows-row auto-rows-max">

                {/**  bloc  subscribe columns  ***/}
                <div className="flex   rounded-2xl border-gray-300 w-200  border-1 !p-10">
                    {/* Colonne gauche – Image */}
                    <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                            alt="Illustration"
                            className="h-50 w-50 object-cover"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="font-medium">Bienvenue sur Eliandre shop</h2>
                        <p className="desc w-60">
                            Découvrez Eliandre Shop, votre boutique en ligne dédiée
                            à l'élégance et à la beauté.
                        </p>
                        <form method="POST">
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Field
                                    placeholder='Email'
                                    type="email"
                                    name="Email"
                                    width="w-60"
                                />
                            </div>
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Field
                                    type="text"
                                    placeholder='••••••••••••••••'
                                    name="Mot de passe"
                                    width="w-60"
                                />
                            </div>
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Boutton type="submit" value="Connexion" size="60"/>
                            </div>
                            <div className="flex justify-items-start gap-x-5 !mb-4">
                                <span className=" text-xs text-gray-500">Pas de compte ?   <a
                                      href=""
                                      className="text-teal-600  font-medium"
                                    onClick={()=>route('/inscription')}
                                > S'inscrire</a></span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    </div>

}
export default Connexion;
