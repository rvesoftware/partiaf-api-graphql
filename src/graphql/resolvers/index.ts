import { getCoversById } from "../../business-logic/covers/get-by-id";
import { getCoverById } from "../../business-logic/covers/get-one";
import { createFollow } from "../../business-logic/follow/create";
import { getFollowers } from "../../business-logic/follow/followers";
import { isFollow } from "../../business-logic/follow/is-follow";
import { unfollow } from "../../business-logic/follow/unfollow";
import { getStoreById } from "../../business-logic/stores/get-one";
import { getAllStores } from "../../business-logic/stores/list";
import { getUserById } from "../../business-logic/users/get-user-by-id";
import { searchUsers } from "../../business-logic/users/list";
import { userSignin } from "../../business-logic/users/signin";
import { userSignup } from "../../business-logic/users/signup"
import { UnfollowUser } from "../../business-logic/users/unfollow";
import { User } from "../../types";

interface Search {
    search: string
}

interface Follow {
    uuid: string
    username: string
}

interface Store {
    id: string
}


interface IsFollow {
    username: string
}
export default {
    Query: {
        async getUser(_:any, {uuid, username}: User, context:any) {
            const user = await getUserById( uuid, username);
            return user;
        },
        async searchUsers(_:any, {search}: Search, context:any) {
            const users = await searchUsers(search);
            return users;
        },

        async isFollow(_:any, {uuid, username}: Follow, context:any) {
            const follow = await isFollow(uuid, username);
            return follow;
        },

        async getFollowers(_:any, {uuid, username}: Follow, context:any) {
            const follow = await getFollowers(uuid, username);
            return follow;
        },

        async getStores(_:any, {}, context:any) {
            const stores = await getAllStores();
            return stores;
        },
        async getStore(_:any, {id}:Store, context:any) {
            const store = await getStoreById(id);
            return store;
        },

        async getCovers(_:any, {id}:Store, context:any) {
            const covers = await getCoversById(id);
            return covers;
        },

        async getCover(_:any, {id}:Store, context:any) {
            const cover = await getCoverById(id);
            return cover;
        },
    },

    Mutation: {
        async userSignup(_:any, {name, username, phone, password}: User, context:any) {
            const user = await userSignup({name, username,phone, password});
            return user;
        },

        async userSignin(_:any, {username, password}: User, context:any) {
            const user = await userSignin({ username, password});
            console.log("USER", user)
            return user;
        },

        async follow(_:any, {uuid, username}: Follow, context:any) {
            const follow = await createFollow(uuid, username);
            return follow;
        },

        async unfollow(_:any, {uuid, username}: Follow, context:any) {
            console.log("this is unfollow")
            const follow = await unfollow(uuid, username);
            return follow;
        }

        // async userUpdatePhoto(_:any, {uuid: string,  })
    }
}