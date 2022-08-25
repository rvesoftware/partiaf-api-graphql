import { getCoversById } from "../../business-logic/covers/get-by-id";
import { getCoversByUser } from "../../business-logic/covers/get-by-user";
import { getCoverById } from "../../business-logic/covers/get-one";
import { InsertCoverPeople, People } from "../../business-logic/covers/insert";
import { followStore } from "../../business-logic/follow-stores/create";
import { isFollowStore } from "../../business-logic/follow-stores/is-follow";
import { unfollowStore } from "../../business-logic/follow-stores/unfollow";
import { createFollow } from "../../business-logic/follow/create";
import { getFolloweds } from "../../business-logic/follow/followeds";
import { getFollowers } from "../../business-logic/follow/followers";
import { isFollow } from "../../business-logic/follow/is-follow";
import { unfollow } from "../../business-logic/follow/unfollow";
import { getStoreById } from "../../business-logic/stores/get-one";
import { getAllStores } from "../../business-logic/stores/list";
import { searchStores } from "../../business-logic/stores/search";
import { createUserPin } from "../../business-logic/users/create-pin";
import { getUserById } from "../../business-logic/users/get-user-by-id";
import { searchUsers } from "../../business-logic/users/list";
import { userSignin } from "../../business-logic/users/signin";
import { userSignup } from "../../business-logic/users/signup"
import { UnfollowUser } from "../../business-logic/users/unfollow";
import { uploadUserPhoto } from "../../business-logic/users/upload-photo";
import { User } from "../../types";

interface Search {
    search: string
}

interface Follow {
    uuid: string
    username: string
}


interface FollowStore {
    uuid: string
    id: string
}


interface Store {
    id: string
}


interface IsFollow {
    username: string
}

interface UserPin {
    id: string
    pin: number
}

interface UserPhoto {
    uuid: string
    file: string
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
        async searchStores(_:any, {search}: Search, context:any) {
            const stores = await searchStores(search);
            return stores;
        },

        async isFollow(_:any, {uuid, username}: Follow, context:any) {
            const follow = await isFollow(uuid, username);
            return follow;
        },

        async isFollowStore(_:any, {uuid, id}: FollowStore, context:any) {
            const follow = await isFollowStore(uuid, id);
            return follow;
        },

        async getFollowers(_:any, {uuid, username}: Follow, context:any) {
            const follow = await getFollowers(uuid, username);
            return follow;
        },

        async getFolloweds(_:any, {uuid, username}: Follow, context:any) {
            const follow = await getFolloweds(uuid, username);
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

        async getMyCovers(_:any, {id}:Store, context:any) {
            const myCovers = await getCoversByUser(id);
            return myCovers;
        }
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

        async followStore(_:any, {uuid, id}: FollowStore, context:any) {
            const follow = await followStore(uuid, id);
            return follow;
        },

        async unfollow(_:any, {uuid, username}: Follow, context:any) {
            console.log("this is unfollow")
            const follow = await unfollow(uuid, username);
            return follow;
        },

        async unfollowStore(_:any, {uuid, id}: FollowStore, context:any) {
            console.log("this is unfollow")
            const follow = await unfollowStore(uuid, id);
            return follow;
        },

        async insertPeople(_:any, {id, amount, user, state, price}: People, context:any){
            const people = await InsertCoverPeople({id, amount, user, state, price});
            return true;

        },

        async createPin(_:any, {id, pin}: UserPin, context:any){
            const people = await createUserPin(id, pin);
            return true;
        },

        async uploadPhoto(_:any, {uuid, file}: UserPhoto, context:any){
            const upload = await uploadUserPhoto(uuid, file);
            return upload;
        }

        // async userUpdatePhoto(_:any, {uuid: string,  })
    }
}