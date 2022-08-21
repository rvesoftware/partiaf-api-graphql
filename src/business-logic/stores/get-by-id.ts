import { StoreSchemaMongo } from '../../types/models/store/store-mongo';
import {Collection, getModel} from '../../constant-definitions' 

export const getStoresById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)

    const stores = await model.find({admin: id});
    return stores;
}