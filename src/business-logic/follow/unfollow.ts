import { Collection, getModel } from "../../constant-definitions";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";
import { FollowSchemaMongo } from "../../types/models/follow/follow-mongo";

export const unfollow = async (uuid: string, username: string): Promise<Boolean | Error> => {
    const model = getModel(Collection.FOLLOW, FollowSchemaMongo);
    const userModel = getModel(Collection.USERS, UserSchemaMongo);

    const user = await userModel.findOne({username: username});

    if(!user) return Error(" Usuario no encontrado");

    const follow = await model.deleteOne({user: uuid }).where("follow").equals(user.uuid);



    if(follow.deletedCount > 0) return true;

    return false;
}