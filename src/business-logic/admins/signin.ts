import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'
import { validateSigninInput } from '../helpers/validators';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendConfirmationEmail } from '../helpers/emailService';

export const adminSignin = async (email:string, password:string): Promise<any> => {
    const {valid, errors} = validateSigninInput(email, password)

    if(!valid){
        throw new Error(`${errors}`);
    }

    // Sure user doesn't already exist
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo)

    const admin = await model.findOne({email: email});

    if(!admin) {
        return new Error("Usuario no existe o esta inactivo");
    }

    const match = await bcrypt.compare(password, admin.password);

    if(!match) {
        return new Error("Contraseña o correo incorrecto");
    }

    if(admin && admin.status == "inactive") {
        const code = await sendConfirmationEmail(admin.email);
        admin.verification_code = code;
        await admin.save();
        return {
            token:801,
            ...admin._doc
        };
    }

    const token = jwt.sign({_id: admin._id}, process.env.JWT_SIGNIN_KEY || "", {});

    return {
        token,
        ...admin._doc
    };
}