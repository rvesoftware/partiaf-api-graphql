import { Cover, StoreSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constant-definitions";

export const updateStore = async(id:String, name: string, description:string, type:string, nit:string, phone: number, limit:number, employe_code:number): Promise<any | Error> => {
    const model = await getModel(Collection.STORES, StoreSchemaMongo);
    const store = await model.findById(id);
    if(!store) { throw new Error("No se encontro el cover")};
    
    store.name  = name? name: store.name;
    store.description  = description? description: store.description;
    store.type  = type? type: store.type;
    store.nit = nit? nit: store.nit;
    store.phone  = phone? phone: store.phone;
    store.limit = limit? limit: store.limit;
    store.employe_code  = employe_code? employe_code: store.employe_code;
    


    await store.save();
    
    return store;
}    