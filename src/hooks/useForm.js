import { useCallback } from "react"


export const useForm = () => {
        
    //validation fields
    const onFormValidation = useCallback((formData, setErrors) => {
        
                //VARIABLES INIT
                const newError = {}
                //email validation
                if(!formData?.email?.trim()){newError.email = "L'email est requis."} 
                else if(!emailValidate(formData.email)){newError.email = "L'email est invalide"}
                
                // vérify le champs mot de passe vide
                 if (!formData?.password?.trim()) {
                    newError.password = 'Le mot de passe est requis.';
                    } 
                else if (formData.password.length < 8 ) {
                    // newError.password = 'The password must contain 8 caracters minum';
                    newError.password = 'le mot de passe doit contenir au Minimum 8 caractères.';
                } 
                else if(formData.password.length > 25){
                    // newError.password = 'The password must contain 25 caracters maximum';
                    newError.password = 'le mot de passe doit contenir au maximun Minimum 25 characters.';
                }
                //Vérifie la présence d'une majuscule
                else if(!/[A-Z]/.test(formData.password)){
                    // newError.password = 'The password must contain one capitalize letter';
                    newError.password = 'le mot de passe doit contenir au moins une lettre majuscule.';
                }
                // Vérifie la présence d'un chiffre
                else if(!/[0-9]/.test(formData.password)){
                    // newError.password = 'The password must contain one number';
                    newError.password = 'le mot de passe doit contenir au moins un nombre.';
                }
                // Vérifie la présence d’un caractère spécial
                else if(!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)){
                    // newError.password = 'The password must contain one capitalize letter';
                    newError.password = 'le mot de passe doit contenir au moins  un caractère spécial.';
                }
                
                setErrors(newError)
        
                return Object.keys(newError).length === 0
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

    const columnValidate = useCallback((field, name)=>{
        let error= ''
        //telephone
        if(name === 'telephone' && name){
            if(field.length > 0 && field.length >10 ){ error = name + 'doit contenir 10 chiffres'}
        }
        //another columns
        if(field ){
            if(field.trim() === ''){error = name + ' is required'}
            else error = name + ' is required'
        }
        return error
    }, [])
    return {onFormValidation, handleOnChange, columnValidate}
}

const emailValidate = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}


