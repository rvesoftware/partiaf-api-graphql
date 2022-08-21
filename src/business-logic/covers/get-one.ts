import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const getCoverById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)

    const cover = await model.findById(id);
    
    return cover;
}