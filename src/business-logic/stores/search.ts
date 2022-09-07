import {Collection, getModel} from '../../constant-definitions' 
import { StoreSchemaMongo } from '../../types';
import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';

export const searchStores = async (search: string): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)
    const stores = await model.find({name: {$regex: search, $options: 'i'}});
    return stores;
}