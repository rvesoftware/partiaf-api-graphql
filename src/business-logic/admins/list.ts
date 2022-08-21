import {Collection, getModel} from '../../constant-definitions' 
import {AdminSchemaMongo} from '../../types'

export const getAllAdmins = async (): Promise<any> => {
    const model = await getModel(Collection.ADMINS, AdminSchemaMongo)
    const admins = await model.find();
    return admins;
}