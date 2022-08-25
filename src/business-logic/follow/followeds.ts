import { Collection, getModel } from "../../constant-definitions";
import { User } from "../../types";
import { UserSchemaMongo } from "../../types/dtos/user/user-mongo";
import { FollowSchemaMongo } from "../../types/models/follow/follow-mongo";

export const getFolloweds = async (uuid: string, username: string): Promise<User[] | Error> => {
    const model = getModel(Collection.FOLLOW, FollowSchemaMongo);
    const userModel = getModel(Collection.USERS, UserSchemaMongo);

    const user = await userModel.findOne({username: username});

    if(!user) return Error(" Usuario no encontrado");

    const followers = await model.find({user: user._id}).populate('follow') as User[];

    const followersList: User[] = [];

        for await(const follower of followers) {
            followersList.push(follower);
        }

    return followersList;
}