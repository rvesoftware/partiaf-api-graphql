import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'
import {Admin} from '../../types'
import { validateSignupInput } from '../helpers/validators';
import bcrypt from 'bcrypt'
import { sendConfirmationEmail } from '../helpers/emailService';

export const adminSignup = async ({firstname, lastname, email, identification_type, identification, age, password, phone, photo, gender, address, location, date_of_birth}: Admin): Promise<any> => {
    const {valid, errors} = validateSignupInput(email, password)

    if(!valid){
        throw new Error(errors.email + " "+ errors.password);
    }

    // Sure user doesn't already exist
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo)

    const admin = await model.findOne({email: email});

    if(admin){
        return new Error("El correo ya esta registrado");
    }else{
        password = bcrypt.hashSync(password, 10);
        const code = await sendConfirmationEmail(email);

        const newAdmin = new model({
            firstname,
            lastname,
            email, 
            identification_type,
            identification,
            password, 
            age,
            phone,
            photo,
            gender,
            address,
            verification_code: code,
            location,
            date_of_birth
            
        });

        await newAdmin.save();
        return {
            ...newAdmin._doc
        };
        
    }
}