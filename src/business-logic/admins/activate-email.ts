import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'
import jwt from 'jsonwebtoken'

export const activateEmail = async (code: string): Promise<any> => {

    try{
           // Sure user doesn't already exist
        const model = await getModel(Collection.ADMINS, AdminSchemaMongo)

        const admin = await model.findOne({verification_code : code});

        if(admin != null){

            admin.status = 'active';
            admin.verification_code = "0";
            await admin.save();
            const token = jwt.sign({_id: admin._id}, process.env.JWT_SIGNIN_KEY || "", {});
            return {token, ...admin._doc};
        }else{
            return new Error('Codigo no valido')
    }

    }catch(err){
        console.log(err)
    }

}