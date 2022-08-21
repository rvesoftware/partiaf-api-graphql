import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';
import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';


interface People{
    id: string,
    amount: number,
    user: any,
    state: string,
    price: number,
}

export const InsertListCoverPeople = async (data: People): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const userModel = await getModel(Collection.USERS, UserSchemaMongo)


    const cover = await model.findById(data.id);
    const user = await userModel.findById(data.user);

    await user.save();

    if(!cover){
        throw new Error("Could not find cover");
    }

    cover.peoples.unshift({...data, state: "in-list"});
    // cover.limit = cover.limit  - data.amount;

    await cover.save();
    return user;
}