import { Collection, getModel } from "../../constant-definitions";
import { Cover } from "../../types";
import { CoverSchemaMongo } from "../../types/models/cover/cover-mongo";

export const createCover = async (data: Cover): Promise<Cover | null> => {
    const model = getModel(Collection.COVERS, CoverSchemaMongo);

    const result = new model({...data, initial_limit: data.limit});

    if (!result) throw new Error("No se puede crear el cover");

    await result.save();

    const cover = await model.findById(result._id) as Cover;

    return cover;
}