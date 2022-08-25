import { Collection, getModel } from "../../constant-definitions";
import { StoreSchemaMongo } from "../../types";
import { FollowStoreSchemaMongo } from "../../types/models/follow/follow-store-mongo";

export const followStore = async (uuid: string, id: string): Promise<Boolean | Error> => {
    const model = getModel(Collection.FOLLOW_STORE, FollowStoreSchemaMongo);
    const storeModel = getModel(Collection.STORES, StoreSchemaMongo);

    const store = await storeModel.findById(id);

    if(!store) return Error("Usuario no encontrado");

    const result = new model({
        user: uuid,
        follow: store._id
    });

    console.log(result)

    if (!result) throw new Error("No se puede crear el cover");

    await result.save();

    return true;
}