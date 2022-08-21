import {Collection, getModel} from '../../constant-definitions' 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { StoreSchemaMongo } from '../../types';

export const storeSignin = async (id:string, password:string): Promise<any> => {

    // Sure user doesn't already exist
    const model = await getModel(Collection.STORES, StoreSchemaMongo)

    const store = await model.findOne({_id: id});

    if(!store) {
        return new Error("Negicio no existe o esta inactivo");
    }

    const match = await bcrypt.compare(password, store.password);

    if(!match) {
        return new Error("Contraseña incorrecta");
    }

    const token = jwt.sign({_id: store._id}, process.env.JWT_SIGNIN_KEY || "", {});

    return {
        token,
        ...store._doc
    };
}