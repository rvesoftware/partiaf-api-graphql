import { Collection, getModel } from "../../constant-definitions";
import { User} from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";

export const uploadUserPhoto = async (uuid: string, file: string): Promise<any | Error> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findOne({uuid: uuid});
    if(!user) return Error("User nto found");
    try{
        user.photo = file;
        await user.save();
    }catch(err){
        console.log(err)
    }

    
    return {status: true, url: user.photo};    
}