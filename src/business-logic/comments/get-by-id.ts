import { CommentSchemaMongo } from '../../types/models/comment';
import {Collection, getModel} from '../../constant-definitions' 

export const getCommentsById = async (id:string): Promise<any> => {
    const model = await getModel(Collection.COMMENTS, CommentSchemaMongo)

    const comments = await model.find({store: id});
    const newComments = comments.reverse();

    return newComments;
}