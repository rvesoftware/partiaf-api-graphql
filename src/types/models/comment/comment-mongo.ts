import mongoose, { Schema } from "mongoose";
import { Comment } from "./comment";

export const CommentSchemaMongo = new Schema<Comment>({
    text: {type: String},
    photo: {type: String},
    store: {type: mongoose.Types.ObjectId, ref: 'admin'},
    user: {type: String}
})