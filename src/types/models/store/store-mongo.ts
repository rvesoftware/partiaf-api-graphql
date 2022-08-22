import mongoose, { Schema } from "mongoose";
import { Store } from "./store";


export const StoreSchemaMongo = new Schema<Store>({
    name: {type: String},
    description: {type: String},
    type: {type: String},
    nit: {type: String,  unique: true},
    email: {type:String, unique: true},
    password: {type:String},
    phone: {type:Number},
    location: {
        address: {
            street:{type: String},
            city: {type:String},
            state: {type:String},
            zipcode: {type:String}
        },
        geo:
            {
                caract:{type:String},
                longitud: {type:String},
                latitud: {type:String}

            }
        
    },
    limit: {type:Number},
    photos: [{type: String}],
    employes: {type: String},
    status: {type: String, default: "inactive"},
    last_login: {type: Date, default: Date.now()},
    balance: {type: Number, default: 0},
    website: {type: String},
    facebook: {type: String},
    instagram: {type: String},
    tiktok: {type: String},
    youtube: {type: String},
    rating: {type: Number},
    employe_code: {type: Number},
    admin: {type: mongoose.Types.ObjectId, ref: 'admin'}
})