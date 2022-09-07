import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const updateUser = async (user:string, coverId: string): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)


    const cover = await model.findById(coverId);


    if(!cover) return Error('No cover')

    const userIndex = cover.peoples.findIndex((people: any) => people.user == user);

    cover.peoples[userIndex].state = "into";

    await cover.save();

    return cover;
}