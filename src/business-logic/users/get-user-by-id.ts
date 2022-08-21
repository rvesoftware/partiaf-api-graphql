import { ObjectId } from 'mongoose';
import {Collection, getModel} from '../../constant-definitions' 
import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';

export const getUserById = async (uuid: string, username: string): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    if(uuid){
        const user = await model.findOne({uuid: uuid});
        return user;
    }

    if(username){
        const user = await model.findOne({username: username});
        return user;
    }
}