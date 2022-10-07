import mongoose, { Schema } from "mongoose";
import { Booking } from "./booking";


export const BookingSchemaMongo = new Schema<Booking>({
    store: {type: mongoose.Types.ObjectId, ref: 'store'},
    chair_id: {type: mongoose.Types.ObjectId, ref: 'chair'},
    date: {type: String},
    hour: {type: String},
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    state: {type: String},
    min_consumption: {type: Number},
    peoples: {type: Number}
})