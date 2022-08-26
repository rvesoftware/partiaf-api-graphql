import { Collection, getModel } from "../../constant-definitions";
import { User} from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";
import bcrypt from 'bcrypt'

export const updateUserProfile = async (id: string, bio: string, password: string, email: string, instagram: string, pin: string): Promise<Boolean | Error> => {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    
    const user = await model.findById(id);

    if(!user) return Error("User not found");

    if(pin){
        user.pin = pin;
    }
    
    if(bio){
        user.biography = bio;
    }

    if(email){
        user.email = email;
    }

    if(instagram){
        user.instagram = instagram;
    }

    if(password){
        password = bcrypt.hashSync(password, 10);
        user.password = password;    
    }    

    await user.save();

    return true;
}