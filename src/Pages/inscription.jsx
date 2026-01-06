import { useEffect, useState} from "react";
import { useNavbar } from "../hooks/useNavbar.js";
import { useLocation, useNavigate } from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {useFetch} from "../hooks/useFetch.js";
import {Field} from "../components/field.jsx";
import {Boutton} from "../components/boutton.jsx";
import {Message} from "../components/Message.jsx";

const Inscription = () => {
    //init le hook
    const {setOnglet} = useNavbar() // set current page
    const {
        emailValidate,
        columnValidate,
        passwordValidation,
        confirmPasswordValidation
    } = useForm() //for use form

    const {setLocation} = useNavbar() // for navbar
    const {pathname} = useLocation() // update location
    //const route = useNavigate() // route manage
    const { send, errorAPI , data} = useFetch() // fetch api


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

    //urls
    const urls = {
        'test_de_connexion' : 'http://192.168.1.14:3000/api/users/db',
        'creation_user': 'http://192.168.1.14:3000/api/usersd',
    }
    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({
    }) //errors


    //useEffect
    useEffect(()=>{
        setLocation(pathname);
        setOnglet('inscription')
    },[pathname,setOnglet, setLocation])

    //test de connection.
    /*  useEffect(() => {

        const TestDB =  send({
            url: urls.test_de_connexion,
            method: 'GET',
        })
        //console.log('test de DB',TestDB)
    }, []) */

    const onSubmit = (e) => {
        const error = {}

        //const validate = false
        e.preventDefault()

        // 1. CHECKING FIELDS VALIDATION

        //nom
        columnValidate(formData.nom, 'nom') !=='' ? error.nom = columnValidate(formData.nom, 'nom') : ''

        //telephone
        columnValidate(formData.telephone, 'telephone') !=='' ? error.telephone = columnValidate(formData.telephone, 'telephone') : ''

        //prenom
        columnValidate(formData.prenom, 'prenom') !=='' ? error.prenom = columnValidate(formData.prenom, 'prenom') : ''

        //email
        emailValidate(formData.email) !=='' ? error.email = emailValidate(formData.email) : ''

        //2. check password
        passwordValidation(formData.password) !=='' ? error.password = passwordValidation(formData.password) : ''
        confirmPasswordValidation(formData.password,formData.confirmPassword) !=='' ? error.confirmPassword = confirmPasswordValidation(formData.password,formData.confirmPassword) : ''

        setErrors(error)

        //1.1- CHECKING

        if(Object.keys(error).length === 0) {
            console.log('formulaire validé')
            // envoye du formualaire
            const subscribe = send({
                url: urls.creation_user,
                method: 'POST',
                body: {
                    Nom: formData.nom,
                    Prenom: formData.prenom,
                    Telephone: formData.telephone,
                    Password: formData.password,
                    Email: formData.email,
                },
            })

            // test si il ya une erreur dans l'api
            if(errorAPI === null){

                    setUsers(data.data)
                    console.log('get or  res json for return API  ', subscribe)
                    console.log('get data return API', users)

                // on ouvre tous
                console.log('get status', data.status)
                console.log('get data example user info', data.data)
                console.log('get data statusText', data.statusText)

                // changé de page ...
            }
            //affiche l'erreur
            else{
                console.log('error : ', errorAPI, ' urls :', urls )
            }

            setFormData("")
            setErrors("")

        }


    //setFormData("")
    //setErrors("")
    }



    const onCancel = (e) => {
        e.preventDefault();
        setFormData({ ... initialFormaData})
        setErrors({ ... initialErrors })
    }


    // test inscription


    return (<>
                <div className="flex justify-center items-center bg-white w-screen" >

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
                                            name="nom"
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
                                    <Boutton type='restore' value='Effacer' size='50' restore='true' onclick={onCancel} />
                                    <Boutton value='Enregistrer' size='50' onclick={onSubmit}/>
                                </div>



                            </div>
                        </form>

                    </div>
                </div>
    </>)
}
export default Inscription