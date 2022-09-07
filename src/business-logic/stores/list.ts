import { StoreSchemaMongo } from '../../types/models/store/store-mongo';
import {Collection, getModel} from '../../constant-definitions' 

export const getAllStores = async (): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)
    const stores = await model.find({});
    return stores;
}