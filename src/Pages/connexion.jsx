
import "../styles/connexion.css"
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
import {useNavbar} from "../hooks/useNavbar.js";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "../hooks/useForm.js";
import {useFetch} from "../hooks/useFetch.js";


const Connexion = () => {
    //********HOOK
        const {setLocation, setOnglet} = useNavbar() // for navbar
        const {pathname} = useLocation() // update location
        const route = useNavigate() // route manage
        const {
                emailValidate,
                passwordValidation,
                handleLogin,

        } = useForm() // ************ use
        const { send, errorAPI , data} = useFetch() // fetch api

        //
        let user = {}

    //********** VARIABLES ************
    const [formData, setFormData] = useState({email:'', password:''})
    const [errors, setErrors] = useState({email:'', password:''})
    const [username, setUsername] = useState({})

    //urls
    const urls = {
        'test_de_connexion' : 'http://192.168.1.14:3000/api/users/db',
        'login_user': 'http://192.168.1.14:3000/api/users/login',
        'users': 'http://192.168.1.14:3000/api/users',
    }

    //initial formdata & errors
    const initialFormaData= {
        email:'',
        password:'',
        }

    const initialErrors = {
        email:'',
        password:'',
    }

    //useEffect for location and current page
    useEffect(()=>{
        setLocation(pathname);
        setOnglet('connexion') //
    },[pathname,setOnglet, setLocation])


    // HANDLE
    const handleOnsubmit = (e) => {
        const error = {}
        e.preventDefault();
        //1. check email
        emailValidate(formData.email) !=='' ? error.email = emailValidate(formData.email) : ''

        //2. check password
        passwordValidation(formData.password) !=='' ? error.password = passwordValidation(formData.password) : ''
        setErrors(error)
        if(Object.keys(error).length === 0){
            console.log("validé")

        const result =  handleLogin(urls.login_user, {Email:formData.email, Password:formData.password})

            console.log('✅ LOGIN SUCCESS :', result);
            // test si il ya une erreur dans l'api
            if(!errorAPI || Object.keys(errorAPI).length === 0){
                setUsername(result)
                route('/accueil',{user : username})

                // changé de page ...
            }
            //affiche l'erreur
            else{
                console.log('error : ', errorAPI, ' urls :', urls )
            }


            setFormData(initialFormaData)
            setErrors(initialErrors)
        }
        else {
            console.log("non validé")
        }

    }

    // test de Connection connetion page
    useEffect(()=>{
        //test connection
        let testDB = {}
        const testConnection = async () => {
            testDB = await send({
                url : urls.test_de_connexion,
                method: 'GET', })
                console.log('test_de_connexion page connexion data : ', testDB) }
        testConnection()
    },[])

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
                                         value="Connexion"
                                         size="60"
                                         onclick={ handleOnsubmit}
                                />
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
