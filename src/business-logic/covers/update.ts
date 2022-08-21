import { Cover } from "../../types";
import { Collection, getModel } from "../../constant-definitions";
import { CoverSchemaMongo } from "../../types/models/cover/cover-mongo";

export const updateCover = async(id:String, name: string, type:string, price:number, date:string, limit:number, hour: string,description:string, image:string): Promise<Cover | Error> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo);
    const cover = await model.findById(id);

    if(!cover) { throw new Error("No se encontro el cover")};
    
    cover.name  = name? name: cover.name;
    cover.type  = type? type: cover.type;
    cover.price = price? price: cover.price;
    cover.date  = date? date: cover.date;
    cover.limit = limit? limit: cover.limit;
    cover.hour  = hour? hour: cover.hour;
    cover.image  = hour? name: cover.image;
    cover.description  = description? description: cover.description;


    await cover.save();
    
    return cover;
}    