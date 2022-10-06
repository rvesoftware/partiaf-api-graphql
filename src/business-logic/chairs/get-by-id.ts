import {Collection, getModel} from '../../constant-definitions' 
import { ChairSchemaMongo } from '../../types/models/chairs';

export const getChairsById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.CHAIRS, ChairSchemaMongo)
    const chairs = await model.find({store: id});
    return chairs;
}