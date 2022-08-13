import { Schema } from "mongoose";
import { User } from "./user";


export const UserSchemaMongo = new Schema<User>({
    name: {type: String},
    username: {type: String, trim:true, unique:true},
    email: {type: String, trim:true, unique:true},
    type: {type: String},
    verified: {type: Boolean},
    password: {type: String, trim:true},
    phone: {type: String, trim:true, unique:true},
    photo: {type: String, trim:true},
    instagram: {type: String, trim:true},
    gender: {type: String},
    biography: {type: String},
    wishlist: [{store: String}],
    followers: [{type: String}],
    following: [{type: String}],
    interests: [{type: String}],
    balance: {type: Number},
    events: {type: Number},
    pin: {type: Number},
})