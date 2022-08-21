import { ObjectId } from "mongoose";

export interface Follow {
    user: ObjectId;
    follow: String;
} 