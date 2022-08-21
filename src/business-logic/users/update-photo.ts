import { Collection, getModel } from "../../constant-definitions";
import { User} from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";

export const updateUserPhoto = async (uuid: string, file: string): Promise<User | Error> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findOne({uuid: uuid});

    try{
        if(user){
            await user.save()
        }
    }catch(err){
        console.log(err)
    }

    return Error("Error saving")
        
}