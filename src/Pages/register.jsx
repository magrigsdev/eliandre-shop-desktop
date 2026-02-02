import {  useState} from "react";
//import { useNavbar } from "../hooks/useNavbar.js";
import { useNavigate} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
import useApp from "../hooks/useApp.js";
import {Texts} from "../Constants/texts.js";


const Register = () => {
    //init le hook
    //const {setOnglet} = useNavbar() // set current page
    const {
        emailValidate,
        columnValidate,
        passwordValidation,
        confirmPasswordValidation
    } = useForm() //for use form

    // MANAGE LOCATION PAGE
   // const {setLocation} = useNavbar() // for navbar
   // const {pathname} = useLocation() // update location

    const route = useNavigate() // route manage



    //init variables*
    const [formData, setFormData] = useState({
        nom:'',
        prenom:'',
        telephone:'',
        password:'',
        confirmPassword:'',
        email:'',
    })

    //initial formdata & errors
    const initialFormaData= {
        nom:'',
        prenom:'',
        telephone:'',
        password:'',
        confirmPassword:'',
        email:''}
    const initialErrors = {
        nom:'',
        prenom:'',
        telephone:'',
        password:'',
        confirmPassword:'',
        email:''
    }



    const [errors, setErrors] = useState({
    }) //errors

    //*************************************
    //  HOOKS
    //*************************************
    const { setUser, setIsLogin} = useApp()
    const {handleRegister} = useForm()

    const onSubmit = async (e) => { // 1. Ajout de async
        const error = {};
        e.preventDefault();

        // --- VALIDATION DES CHAMPS ---
        if (columnValidate(formData.nom, 'nom')) error.nom = columnValidate(formData.nom, 'nom');
        if (columnValidate(formData.telephone, 'telephone')) error.telephone = columnValidate(formData.telephone, 'telephone');
        if (columnValidate(formData.prenom, 'prenom')) error.prenom = columnValidate(formData.prenom, 'prenom');
        if (emailValidate(formData.email)) error.email = emailValidate(formData.email);
        if (passwordValidation(formData.password)) error.password = passwordValidation(formData.password);
        if (confirmPasswordValidation(formData.password, formData.confirmPassword)) {
            error.confirmPassword = confirmPasswordValidation(formData.password, formData.confirmPassword);
        }

        setErrors(error);
        // --- ENVOI SI PAS D'ERREURS ---
        if (Object.keys(error).length === 0) {
            console.log('Formulaire validé, envoi en cours...');

            // 2. On attend la réponse du serveur
           const result = await handleRegister(
               Texts.URLS.USERS_REGISTER, {
                   Nom: formData.nom,
                   Prenom: formData.prenom,
                   Telephone: formData.telephone,
                   Password: formData.password,
                   Email: formData.email,
               } )
            console.log("result : ",result)
            // 3. On vérifie le succès via le résultat direct
            if (result && result.success) {


                setIsLogin(true)
                // On peut stocker l'utilisateur dans le state ou le passer à la home
                setUser(result.data);
                console.log('✅ Utilisateur créé avec succès');
                // Reset des champs
                setFormData(initialFormaData); // Utilise ton objet initial
                setErrors(initialErrors);

                // Redirection vers l'accueil ou login
                route('/');

            } else {
                // L'erreur est gérée par ton useFetch (ErreurAPI)
                console.log('❌ Erreur API :', result?.message || "une erreur s'est produite");
            }
        }
    };

    const onCancel = (e) => {
        e.preventDefault();
        setFormData({ ... initialFormaData})
        setErrors({ ... initialErrors })
    }

    return (<>
                <div className="flex justify-center items-center bg-white screen" >

                    <div className="grid grid-flows-row auto-rows-max">
                        {/**  bloc 1 title   ***/}
                        <div className="flex justify-start !mb-2 ">
                            {/**  bloc 1 logo and title   ***/}
                            <div className="flex flex-start gap-x-6 ">
                                <div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                                        alt="EliandreShop Logo"
                                        className="img w-20 h-20"/>
                                </div>


                                <div className="mt-2 w-180 gap-x-2 ">
                                    <h2 className=" text-2xl font-bold">Bienvenue sur Eliandre shop</h2>
                                    <p className="text-base">Créez votre profil pour découvrir nos perruques, conseils beauté et
                                        nouveautés tendance.</p>
                                </div>


                            </div>

                        </div>

                        {/**  bloc 2 subscribe columns  ***/}
                        <form  method="POST">
                            <div className="flex flex-col  rounded-2xl border-gray-300 w-200  border-1 !p-10">

                                <div className="flex justify-start gap-x-5 !mb-4">
                                    <Field
                                            placeholder='nom'
                                            type="text"
                                            name="Nom"
                                           width="w-60"
                                           errorMessage={errors.nom}
                                           value={formData.nom}
                                           onChange={(e) => setFormData({...formData, nom: e.target.value})}
                                    />
                                    <Field
                                        type="text"
                                        placeholder='prénom'
                                        name="Prénom"
                                        width="w-60"
                                        errorMessage={errors.prenom}
                                        value={formData.prenom}
                                        onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                                    />

                                </div>
                                <div className="flex justify-start !mb-4 gap-x-4">
                                    <Field
                                        placeholder='telephone'
                                        type="numerique"
                                        name="Téléphone"
                                        width="w-60"
                                        errorMessage={errors.telephone}
                                        value={formData.telephone}
                                        onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                                    />
                                    <Field
                                        placeholder='email'
                                        type="email"
                                        name="Email"
                                        value={formData.email}
                                        errorMessage={errors.email}
                                        width="w-60"
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="flex justify-start gap-x-4 !mb-4">
                                    <Field
                                        type="password"
                                        placeholder="••••••••"
                                        name="Mot de passe"
                                        width="w-60"
                                        value={formData.password}
                                        errorMessage={errors.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    />
                                    <Field
                                        type="password"
                                        name="Confirmation de mot de passe"
                                        width="w-60"
                                        placeholder='••••••••'
                                        errorMessage={errors.confirmPassword }
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}/>
                                </div>


                                <div className="flex justify-start !mb-4 gap-x-16">
                                    <Boutton type='restore' value='Effacer' size='50' restore='true' onClick={onCancel} />
                                    <Boutton value='Enregistrer' size='50' onClick={onSubmit}/>
                                </div>
                                <div className="flex justify-right gap-x-5 !mb-4">
                                <span className=" text-xs text-gray-500 m-4"> Vous avez déjà un compte ?   <a
                                    href=""
                                    className="text-teal-600  font-medium"
                                    onClick={()=>route('/connexion')}
                                > Connexion</a></span>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
    </>)
}
export default Register