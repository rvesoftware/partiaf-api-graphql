import { Schema } from "mongoose";
import { Admin } from "./admin";

export const AdminSchemaMongo = new Schema<Admin>({
    firstname: {type: String},
    lastname: {type: String},
    identification: {type: Number, unique:true},
    age: {type: Number},
    password: {type:String},
    phone: {type:String},
    email: {type:String, unique: true},
    photo: {type: String},
    gender: {type: String},
    status: {type: String, default: "inactive"},
    verification_code: {type: String},
    last_login: {type: Date, default: Date.now()},
    location: {type: String},
    date_of_birth: {type: Date, default: Date.now()},
    notifications: {type: Boolean, default:false}
})