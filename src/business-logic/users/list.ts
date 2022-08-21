import {Collection, getModel} from '../../constant-definitions' 
import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';

export const searchUsers = async (search: string): Promise<any> => {
    console.log(search);
    const model = await getModel(Collection.USERS, UserSchemaMongo)
    const users = await model.find({name: {$regex: search, $options: 'i'}});
    return users;
}