import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';

export const updateUser = async (user:string, coverId: string): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)

    console.log("EL ID", coverId);
    console.log("EL USERID", user);

    const cover = await model.findById(coverId);

    console.log("EL COVER", cover)

    const userIndex = cover.peoples.findIndex((people: any) => people.user == user);
    console.log("EL INDEX", userIndex);

    cover.peoples[userIndex].state = "into";

    await cover.save();

    return cover;
}