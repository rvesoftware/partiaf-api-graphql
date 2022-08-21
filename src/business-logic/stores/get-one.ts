import { StoreSchemaMongo } from '../../types/models/store/store-mongo';
import {Collection, getModel} from '../../constant-definitions' 

export const getStoreById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)

    const store = await model.findById(id);
    return store;
}