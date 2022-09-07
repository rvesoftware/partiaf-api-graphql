import { User } from "../types";
const typeDefts =  `
scalar Upload
 
type User{
    _id: ID
    uuid: String
    name: String
    username: String
    email: String
    instagram: String
    password: String
    photo: String
    balance: Int
    pin: String
    createdAt: String
    token: String
    events: Int
    biography: String
}

type Store{
    _id: ID
    uuid: String
    address: String
    name: String
    description: String
    type: String
    email: String
    phone: String
    photos: [String]
    createdAt: String
}

type Cover{
    _id: ID
    uuid: String
    type: String
    name: String
    description: String
    limit: Int
    date: String
    hour: String
    image: [String]
    price: Int
    peoples: [People]
    createdAt: String
}

type People{
    amount: Int
    user: String
    state: String
    price: Int
    date: String
    hour: String
    name: String
    photo: String
    description: String
    location: String
}

input UserInput{
    name: String!
    username: String!
    phone: String!
    password: String!
}

type UpdateUserPhoto {
    status: Boolean
    url: String
}

type Query{
    getUser(uuid:String, username:String): User 
    searchUsers(search: String): [User]
    searchStores(search: String): [Store]
    isFollow(uuid: String, username: String): Boolean
    isFollowStore(uuid: String, id: String): Boolean
    getFollowers(uuid: String, username: String): [User]
    getFolloweds(uuid: String, username: String): [User]
    getStores: [Store]
    getStore(id: String): Store
    getCovers(id: String): [Cover]
    getCover(id: String): Cover
    getMyCovers(id: String): [People]
    getAllCovers: [Cover]
}

type Mutation {
    userSignup(name:String, phone:String, username:String, password:String): User
    userSignin(username:String, password:String): User
    updateUserPhoto(file: Upload): UpdateUserPhoto
    uploadPhoto(uuid: String, file: String): UpdateUserPhoto


    follow(uuid: String, username:String!): Boolean
    unfollow(uuid: String, username:String!): Boolean

    followStore(uuid: String, id:String!): Boolean
    unfollowStore(uuid: String, id:String!): Boolean


    insertPeople(id: String, user: String, price:Int, amount:Int, state:String, name:String, photo:String): Boolean
    createPin(id: String,  pin:String): Boolean

    resetPassword(id: String,  phone:String): Boolean

    updateUserProfile(id: String, bio: String, email: String, password: String, instagram: String, pin: String):Boolean

}

`;

export default typeDefts;