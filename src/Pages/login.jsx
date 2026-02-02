
import "../styles/connexion.css"
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
//import {useNavbar} from "../hooks/useNavbar.js";
import { useNavigate} from "react-router-dom";
import { useState} from "react";
import {useForm} from "../hooks/useForm.js";
import {Texts} from "../Constants/texts.js";
import useApp from "../hooks/useApp.js";


const Login = () => {
    //********  HOOK ************************
        //const {setLocation, setOnglet} = useNavbar() // for navbar
        //const {pathname} = useLocation() // update location
        const route = useNavigate() // route manage
        const {
                emailValidate,
                passwordValidation,
                handleLogin,
        } = useForm() // ************ use

    //appelle a isLogin pour montré que il est connecté
    const {isLogin, setIsLogin, user,setUser} = useApp()

    //********** VARIABLES ************
    const [formData, setFormData] = useState({email:'', password:''})
    const [errors, setErrors] = useState({email:'', password:''})


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
    const handleOnsubmit = async (e) => {
        e.preventDefault();
        const error = {};

        // 1. Validation locale
        const emailErr = emailValidate(formData.email);
        const passErr = passwordValidation(formData.password);

        if (emailErr) error.email = emailErr;
        if (passErr) error.password = passErr;

        setErrors(error);

        // 2. Si aucune erreur locale, on lance l'appel API
        if (Object.keys(error).length === 0) {

            // 🔑 ATTENDRE la réponse de la Promise
            const result = await handleLogin(Texts.URLS.USERS_LOGIN, {
                Email: formData.email,
                Password: formData.password
            });

            // 3. Vérification du résultat une fois la Promise résolue
            if (result && result.success) {
                console.log("islogin avant :", isLogin);
                console.log('✅ LOGIN SUCCESS :', result.data);
                setIsLogin(true)
                setUser(result.data);
                console.log("islogin après :", isLogin);
                console.log("user :", user);


                // Optionnel : On peut mettre à jour un state local ou contextuel ici
                // setUsername(result.data);

                // Nettoyage du formulaire
                setFormData(initialFormaData);
                setErrors(initialErrors);

                // 🚀 REDIRECTION : On passe les infos de l'utilisateur à la Home
                // On utilise result.data car c'est l'objet frais renvoyé par le serveur
                route('/');

            } else {
                // Ici, result.success est false (400, 401, 500, etc.)
                // L'erreur est normalement déjà stockée dans ton state ErreurAPI par useFetch
                console.error('❌ ÉCHEC CONNEXION :', result?.message || "Erreur inconnue");
            }
        }
    };


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
