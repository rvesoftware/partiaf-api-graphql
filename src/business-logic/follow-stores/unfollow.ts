import { Collection, getModel } from "../../constant-definitions";
import { StoreSchemaMongo } from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";
import { FollowSchemaMongo } from "../../types/models/follow/follow-mongo";
import { FollowStoreSchemaMongo } from "../../types/models/follow/follow-store-mongo";

export const unfollowStore = async (uuid: string, id: string): Promise<Boolean | Error> => {
    const model = getModel(Collection.FOLLOW_STORE, FollowStoreSchemaMongo);
    const userModel = getModel(Collection.STORES, StoreSchemaMongo);

    const store = await userModel.findById(id);

    if(!store) return Error(" Store no encontrado");

    const follow = await model.deleteOne({user: uuid }).where("follow").equals(store._id);



    if(follow.deletedCount > 0) return true;

    return false;
}