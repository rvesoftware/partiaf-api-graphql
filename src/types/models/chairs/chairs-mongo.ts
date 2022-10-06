import mongoose, { Schema } from "mongoose";
import { Chair } from "./chairs";


export const ChairSchemaMongo = new Schema<Chair>({
    type: {type: String},
    store: {type: mongoose.Types.ObjectId, ref: 'store'},
    min_consumption: {type: Number},
    chairs: {type: Number},
    max_chairs: {type: Number},
}, {
    versionKey: false,
    timestamps: true
})