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
    createdAt: String
    token: String
    events: Int
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
    isFollow(uuid: String, username: String): Boolean
    getFollowers(uuid: String, username: String): [User]

}

type Mutation {
    userSignup(name:String, phone:String, username:String, password:String): User
    userSignin(username:String, password:String): User
    updateUserPhoto(file: Upload): UpdateUserPhoto

    follow(uuid: String, username:String!): Boolean
    unfollow(uuid: String, username:String!): Boolean

}

`;

export default typeDefts;