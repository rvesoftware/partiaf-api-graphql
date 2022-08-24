import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';
import {Collection, getModel} from '../../constant-definitions' 
import { CoverSchemaMongo } from '../../types/models/cover/cover-mongo';


export interface People{
    id: string,
    amount: number,
    user: any,
    state: string,
    price: number,
}

export const InsertCoverPeople = async (data: People): Promise<any> => {
    const model = await getModel(Collection.COVERS, CoverSchemaMongo)
    const userModel = await getModel(Collection.USERS, UserSchemaMongo)


    const cover = await model.findById(data.id);
    const user = await userModel.findById(data.user);

    if(!user) {return Error(`User not found`)}

    user.balance = user.balance - data.price;
    user.events = user.events? user.events  + 1 : 1; 

    await user.save();

    if(!cover){
        throw new Error("Could not find cover");
    }

    cover.peoples.unshift(data);
    cover.limit = cover.limit  - data.amount;

    await cover.save();
    return user;
}