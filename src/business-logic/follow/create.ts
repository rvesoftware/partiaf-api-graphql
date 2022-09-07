import { Collection, getModel } from "../../constant-definitions";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";
import { FollowSchemaMongo } from "../../types/models/follow/follow-mongo";

export const createFollow = async (uuid: string, username: string): Promise<Boolean | Error> => {
    const model = getModel(Collection.FOLLOW, FollowSchemaMongo);
    const userModel = getModel(Collection.USERS, UserSchemaMongo);

    const user = await userModel.findOne({username: username});

    if(!user) return Error(" Usuario no encontrado");

    const result = new model({
        user: uuid,
        follow: user.uuid
    });


    if (!result) throw new Error("No se puede crear el cover");

    await result.save();

    return true;
}