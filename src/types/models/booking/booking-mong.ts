import mongoose, { Schema } from "mongoose";
import { Booking } from "./booking";


export const BookingSchemaMongo = new Schema<Booking>({
    type: {type: String},
    amount: {type: Number},
    store: {type: mongoose.Types.ObjectId, ref: 'store'},
    hour: {type: String},
    price: {type: Number},
    day: {type: String},
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    peoples: {type: Number}
})