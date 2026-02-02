import { useCallback } from "react"
import {useFetch} from "./useFetch.js";


export const useForm = () => {

    //import send
    const {send} = useFetch()
    //validation de confirmation de mot de passe
    const confirmPasswordValidation = useCallback((password, confirmPassword) => {
        let newError = ''
        // vérify le champs mot de passe vide
        if (!confirmPassword?.trim()) {
            newError= 'confirmation de mot de passe est requise.';
        }
        else if(password !== confirmPassword) {
            newError= 'les mots de passe ne correspondent pas.';
        }
        return newError;
    }, [])

    //validation password
    const passwordValidation = useCallback((password) => {
        
                //VARIABLES INIT
                let newError = ''

                // vérify le champs mot de passe vide
                 if (!password?.trim()) {
                    newError= 'mot de passe est requise.';
                    }

                else if (password.length < 8 ) {

                    newError = 'mot de passe doit contenir au Minimum 8 caractères.';
                }
                else if(password.length > 25){
                     newError = 'mot de passe doit contenir au maximun  25 characters.';
                }
                //Vérifie la présence d'une majuscule
                else if(!/[A-Z]/.test(password)){
                    // newError.password = 'The password must contain one capitalize letter';
                     newError = 'mot de passe doit contenir au moins une lettre majuscule.';
                }
                // Vérifie la présence d'un chiffre
                else if(!/[0-9]/.test(password)){
                    // newError.password = 'The password must contain one number';
                     newError = 'mot de passe doit contenir au moins un nombre.';
                }
                //Vérifie la présence d’un caractère spécial
                else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
                    // newError.password = 'The password must contain one capitalize letter';
                     newError = 'le mot de passe doit contenir au moins  un caractère spécial.';
                }
               // setErrors(newError)
                return capitalizeWords(newError);
               // return Object.keys(newError).length === 0
        },
        [])
    
    // management for fields
    /**
     @params fields, value, setFormData, setErrors
     @return errors
     */
    const handleOnChange = useCallback((field, value, setFormData, setErrors)=>{
            setFormData(form =>({...form, [field]: value}))// update the formData
            setErrors(errors => { // delete field if error found
                if(errors[field]){return {...errors, [field]:''}}
                return errors // else no change
            })
    }, []) // no dependencies, stable function

    //validation des colonnes
    const columnValidate = useCallback((value, name)=>{
        let error= ''

        //telephone
        if(name === 'telephone' && name){
            if(!value?.trim()){
                error = capitalizeWords(name) + ' est requise'
            }
            else if(!isValidPhone(value)){
                error =  capitalizeWords(name) + ' doit contenir  10 chiffres'
            }
        }

        //another columns.
        if(name && !value?.trim()){
             error = capitalizeWords(name) + ' est requise'
        }
        else if(!value ){error = capitalizeWords(name) + ' est requise'}

        return error //return
    }, [])

    //email validation
    const emailValidate = useCallback((email)=>{
        let error = ''
        //email validation
        if(!email?.trim()){error = "L'email est requise."}
        else if(!emailVal(email)){error = "L'email est invalide"}
        return error
    },[])


    /**
     * LOGIN
     * @param url
     * @param body
     * @returns {Promise<Object|null>}
     */
    const handleLogin = async (url, body) =>{
        return await send({
            url: url,
            method: 'POST',
            body: body,
        })
    }
    /**
     *
     * @param url
     * @param body
     * @returns {Promise<Object|null>}
     */
    const handleRegister = async (url, body) =>{
        return await send({
            url: url,
            method: 'POST',
            body: body,
        })
    }


    const getProduits = async (url, body) => {
        return await send({
            url: url,
            method: 'GET',
            body: body,
        })
    }

    //GET PRODUCTS

    /**
     * LOGOUT
     * @returns {Promise<void>}
     */
    const handleLogout = async () => {
        console.log('logout')
    }

    //return
    return {

        passwordValidation, handleOnChange,
        columnValidate, emailValidate,
        confirmPasswordValidation,
        handleLogin, handleLogout,
        handleRegister,
        getProduits
    }
}
//email
const emailVal = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}
//mettre la premiere lettre en majuscule
const capitalizeWords = (str = "") => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//valid
const  isValidPhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
}


