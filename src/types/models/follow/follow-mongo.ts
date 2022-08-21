import { Schema } from "mongoose";
import { Follow } from "./follow";


export const FollowSchemaMongo = new Schema<Follow>({
    user: {type: Schema.Types.ObjectId, ref: 'users'},
    follow: {type: String},
}, {
    versionKey: false,
    timestamps: true
})