import { User } from "../types";
const typeDefts =  `
 
type User{
    uuid: ID
    name: String
    username: String
    email: String
    instagram: String
    password: String
    photo: String
    createdAt: String
}

input UserInput {
    name: String!
    username: String!
    phone: String!
    password: String!
}

type Query{
    getUser: User 
}

type Mutation {
    registerUser(inputL UserInput): User
}


`;

export default typeDefts;