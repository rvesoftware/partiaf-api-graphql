import {Collection, getModel} from '../../constant-definitions' 
import {StoreSchemaMongo} from '../../types'

export const waiterSignin = async (code:number): Promise<any> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo)

    const store = await model.findOne({employe_code: code});

    if(!store) {
        return new Error("Negocio no existe");
    }

    return {
        ...store._doc
    };
}