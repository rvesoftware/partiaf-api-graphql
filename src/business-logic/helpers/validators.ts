export type Validator = {
    email: string,
    password: string
}

export const validateSignupInput = (email: string, password: string) => {
    const errors: any = {};

    if(email.trim() == ''){
        errors.email = "El correo no puede estar vacio";
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = "El correo debe ser uno valido"
        }
    }

    if(password === ''){
        errors.password = "la contrasena no puede estar vacia";
    }
    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}

export const validateSigninInput = (email:string, password:string) => {

    const errors: any = {};

    if(email.trim() == ''){
        errors.email = "El correo no puede estar vacio";
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = "El correo debe ser uno valido"
        }
    }
    if(password === ''){
        errors.password = "la contrasena no puede estar vacia";
    }
    
    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}


