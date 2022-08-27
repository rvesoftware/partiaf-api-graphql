import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const getAllCovers = async (): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const covers = await model.find({});
    console.log(covers.length);
    return covers;
}