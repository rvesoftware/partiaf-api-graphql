import { Collection, getModel } from "../../constant-definitions";
import { User} from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";

export const createUserPin = async (id: string, pin: number): Promise<Boolean | Error> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findById(id);

    if(!user) return Error("User not found");

    user.pin = pin;

    await user.save();

    return true;
}