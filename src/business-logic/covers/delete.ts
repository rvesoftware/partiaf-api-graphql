import { Collection, getModel } from "../../constant-definitions";
import { CoverSchemaMongo } from "../../types/models/cover/cover-mongo";

export const deleteCover = async(id:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo);
    const cover = await model.findById(id);

    if(!cover) { throw new Error("No se encontro el cover")};
    
    await cover.remove();
    
    return true;
}    