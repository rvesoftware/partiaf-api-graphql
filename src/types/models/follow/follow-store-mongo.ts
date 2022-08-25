import { Schema } from "mongoose";
import { Follow } from "./follow";


export const FollowStoreSchemaMongo = new Schema<Follow>({
    user: {type: Schema.Types.ObjectId, ref: 'stores'},
    follow: {type: String},
}, {
    versionKey: false,
    timestamps: true
})