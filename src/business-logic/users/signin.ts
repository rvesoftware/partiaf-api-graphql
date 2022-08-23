import {Collection, getModel} from '../../constant-definitions' 
import {User} from '../../types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserSchemaMongo } from '../../types/dtos/user/user-mongo';

type PartialUser = Partial<User>
interface UserSignin extends PartialUser {
    token: string;
}

export const userSignin = async ({username, password}: PartialUser): Promise<UserSignin | Error> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo);

    const user = await model.findOne({username: username});

    if(!user) {
        return new Error("Usuario no existe o esta inactivo");
    }

    const match = await bcrypt.compare(password || "", user.password);

    if(!match) {
        return new Error("Contraseña o correo incorrecto");
    }

    const token = jwt.sign({uuid: user.uuid, name: user.name, username: user.username, pin: user.pin}, process.env.JWT_SIGNIN_KEY || "", {expiresIn: "24h"});

    return {
        token,
        _id: user._id,
        uuid: user.uuid,
        username: user.username,
        name: user.name,
        events: user.events,
        balance: user.balance,
    };
}