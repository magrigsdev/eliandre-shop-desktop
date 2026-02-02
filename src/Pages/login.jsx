
import "../styles/connexion.css"
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
//import {useNavbar} from "../hooks/useNavbar.js";
import {useLocation, useNavigate} from "react-router-dom";
import { useState} from "react";
import {useForm} from "../hooks/useForm.js";
import {Texts} from "../Constants/texts.js";


const Login = () => {
    //********HOOK
        //const {setLocation, setOnglet} = useNavbar() // for navbar
        //const {pathname} = useLocation() // update location
        const route = useNavigate() // route manage
        const {
                emailValidate,
                passwordValidation,
                handleLogin,

        } = useForm() // ************ use
        //const { send, errorAPI , data} = useFetch() // fetch api

        //


    //********** VARIABLES ************
    const [formData, setFormData] = useState({email:'', password:''})
    const [errors, setErrors] = useState({email:'', password:''})
    const [username, setUsername] = useState({})


    //initial formdata & errors
    const initialFormaData= {
        email:'',
        password:'',
        }

    const initialErrors = {
        email:'',
        password:'',
    }

    // HANDLE
    const handleOnsubmit = (e) => {
        const error = {}
        e.preventDefault();

        //1. check email
        emailValidate(formData.email) !=='' ? error.email = emailValidate(formData.email) : ''

        //2. check password
        passwordValidation(formData.password) !=='' ? error.password = passwordValidation(formData.password) : ''
       //obtention de l'erreur sur le formulaire
        setErrors(error)

        //on verifie si le formulaire ne contient pas d'erreur
        if(Object.keys(error).length === 0){

            const result =  handleLogin(Texts.URLS.USERS_LOGIN, {Email:formData.email, Password:formData.password})

            console.log("le resultat du post ",result)

            /*
            if(result.length === 0 ){
                console.log(Texts.SERVER_NOT_FOUND)
                return
            }
            console.log('✅ LOGIN SUCCESS :', result);
            setFormData(initialFormaData)
            setErrors(initialErrors)
            route('/', {state : {user : username }})  */
        }


    }


   // const location = useLocation();
   // console.log('location : ',location);

    return <div className="flex justify-center items-center bg-white screen" >

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
                        <form method="POST" >
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Field
                                    placeholder='Email'
                                    type="email"
                                    name="Email"
                                    width="w-60"
                                    errorMessage={errors.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}

                                />
                            </div>
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Field
                                    type="text"
                                    placeholder='••••••••••••••••'
                                    name="Mot de passe"
                                    width="w-60"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    errorMessage={errors.password}

                                />
                            </div>
                            <div className="flex justify-right gap-x-5 !mb-4">
                                <Boutton type="submit"
                                         value="Login"
                                         size="60"
                                         onClick={handleOnsubmit}
                                />
                            </div>
                            <div className="flex justify-items-start gap-x-5 !mb-4">
                                <span className=" text-xs text-gray-500">Pas de compte ?   <a
                                      href=""
                                      className="text-teal-600  font-medium"
                                    onClick={()=>route('/register')}
                                > S'inscrire</a></span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    </div>

}
export default Login;
