import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';
import {Collection, getModel} from '../../constant-definitions' 

export const FollowUser = async (id:string, user:string): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)


    const userModel = await model.findById(user);

    if(!userModel) {return Error("Usuario no exist")}
    await userModel.followers.push(id);

    const modelFollower = await model.findById(id);
    if(!modelFollower) {return Error("Usuario no exist")}
    
    await modelFollower.following.push(user);
    

    await userModel.save();
    await modelFollower.save();

    return modelFollower;
}