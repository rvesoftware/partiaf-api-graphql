import { Collection, getModel } from "../../constant-definitions";
import { Store, StoreSchemaMongo } from "../../types";
import bcrypt from 'bcrypt'

export const createStore = async (data: Store): Promise<any | null> => {
    const model = getModel(Collection.STORES, StoreSchemaMongo);

    const newPassword =  bcrypt.hashSync(data.password, 10);

    const result = new model({...data, password: newPassword});

    if (!result) throw new Error("No se puede crear el negocio");

    const haveEmail = await model.findOne({email: data.email});
    
    if(haveEmail) throw new Error("El correo ya esta en uso");
    
    const haveNit = await model.findOne({nit: data.nit});

    if(haveNit) throw new Error("El nit ya esta registrado");

    await result.save();

    return result;
}