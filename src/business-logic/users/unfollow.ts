import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';
import {Collection, getModel} from '../../constant-definitions' 

export const UnfollowUser = async (id:string, user:string): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)


    const userModel = await model.findById(user);
    const index = userModel.followers.indexOf(id);
    if(index > -1) {
        await userModel.followers.splice(index, 1);
    }

    const modelFollower = await model.findById(id);
    const indexUser = modelFollower.following.indexOf(user);
    if(indexUser > -1) {
        await modelFollower.following.splice(indexUser, 1);
    }    

    await userModel.save();
    await modelFollower.save();

    return modelFollower;
}