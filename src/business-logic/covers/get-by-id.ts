import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const getCoversById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)

    const covers = await model.find({store: id});
    return covers;
}