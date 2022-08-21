import { Collection, getModel } from "../../constant-definitions";
import { User} from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";

export const createUserPin = async (userId: string, pin: number): Promise<User | null> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findById(userId);
    user.pin = pin;

    await user.save();

    return user;
}