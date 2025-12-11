
export const validateForm = (form, setErrors) => {

        //VARIABLES INIT
        const newError = {}

        //vérifie le champs email vide 
        if(!form.email.trim()){
            newError.email = "L'email est requis."
        }//Validation de l'email 
        else if(!emailValidate(form.email)){
            newError.email = "L'email est invalide"
        }

        // //vérifie le champs mot de passe vide
         if (!form.mtp.trim()) {
            newError.mtp = 'Le mot de passe est requis.';
            } 
        else if (form.mtp.length < 8 ) {
            // newError.mtp = 'The password must contain 8 caracters minum';
            newError.mtp = 'le mot de passe doit contenir au Minimum 8 caractères.';
        } 
        else if(form.mtp.length > 25){
            // newError.mtp = 'The password must contain 25 caracters maximum';
            newError.mtp = 'le mot de passe doit contenir au maximun Minimum 25 characters.';
        }
        //Vérifie la présence d'une majuscule
        else if(!/[A-Z]/.test(form.mtp)){
            // newError.mtp = 'The password must contain one capitalize letter';
            newError.mtp = 'le mot de passe doit contenir au moins une lettre majuscule.';
        }
        // Vérifie la présence d'un chiffre
        else if(!/[0-9]/.test(form.mtp)){
            // newError.mtp = 'The password must contain one number';
            newError.mtp = 'le mot de passe doit contenir au moins un nombre.';
        }
        // Vérifie la présence d’un caractère spécial
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(form.mtp)){
            // newError.mtp = 'The password must contain one capitalize letter';
            newError.mtp = 'le mot de passe doit contenir au moins  un caractère spécial.';
        }
        
        setErrors(newError)

        return Object.keys(newError).length === 0
}

// function to valid email and return boolean : true or false
const emailValidate = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
}

//****** FUNCTION FOR HANDLEONCHANGE */
export const  handleOnChange = (field, value, setForm, errors, setErrors) => {
        setForm(prev => ({...prev, [field]: value}))
        // clean the error field
        if(errors[field]) {
            setErrors(prev=>({...prev,[field]: ''}))
        } 
}

//submit
export const  handleOnSubmit = async (validation,setErrors,setForm, checkUser, form, route) => {
    if(validation()) {
                    const error = {}
                    const user = await checkUser(form.email, form.mtp);
                    if(user){  
                        route('/accueil')
                    }
                    else {
                        // console.log("User not found : ", user, formData)
                        error.email = "Email n'existe pas !"
                        error.mtp = "Mot de passe ne correspond pas !"
                    }
                    setErrors(error)
                    setForm({email: null, mtp: null})
                }
}

