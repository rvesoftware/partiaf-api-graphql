import mongoose, { Schema } from "mongoose";
import { Collection } from "./constants";

export const getModel = (collectionName: Collection, schema: Schema) => {
    return mongoose.model(collectionName, schema);
}