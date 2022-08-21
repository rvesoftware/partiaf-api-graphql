import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'
import { sendChangePasswordEmail } from '../helpers/emailService';
import bcrypt from 'bcrypt'

export const changePassword = async (email: string, password: string): Promise<any> => {
    // Sure user doesn't already exist

    const model = await getModel(Collection.ADMINS, AdminSchemaMongo)

    const admin = await model.findOne({email: email});

    if(!admin){
        return new Error("El correo no existe");
    }else{

        password = bcrypt.hashSync(password, 10);
        
        admin.password = password;
        await admin.save();
        await sendChangePasswordEmail(email);

        return admin;
    }
}