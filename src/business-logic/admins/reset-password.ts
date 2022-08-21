import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'
import { sendConfirmationEmail } from '../helpers/emailService';

export const resetPassword = async (email: string): Promise<any> => {
    // Sure user doesn't already exist
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo)

    const admin = await model.findOne({email: email});

    if(!admin){
        return new Error("El correo no existe");
    }else{

        
        const code = await sendConfirmationEmail(email);
        
        admin.verification_code = code;
        await admin.save();
        
        return admin;
    }
}