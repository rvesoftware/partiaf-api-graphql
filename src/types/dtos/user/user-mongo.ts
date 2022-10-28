import { Schema } from "mongoose";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>({
    uuid: {type: String, unique:true, required:true},
    name: {type: String},
    username: {type: String, trim:true, unique:true},
    email: {type: String, trim:true, unique:true},
    type: {type: String},
    verified: {type: Boolean},
    password: {type: String, trim:true},
    phone: {type: String, trim:true, unique:true},
    photo: {type: String},
    instagram: {type: String, trim:true},
    gender: {type: String},
    biography: {type: String},
    wishlist: [{store: String}],
    followers: [{type: String}],
    following: [{type: String}],
    interests: [{type: String}],
    balance: {type: Number, default: 0},
    events: {type: Number, default: 0 },
    pin: {type: String},
}, {
    versionKey: false,
    timestamps: true
});