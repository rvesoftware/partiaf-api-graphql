import { Comment, CommentSchemaMongo } from "../../types/models/comment";
import { Collection, getModel } from "../../constant-definitions";

export const createComment = async (data: Comment): Promise<Comment | null> => {
    const model = getModel(Collection.COMMENTS, CommentSchemaMongo);

    const result = new model({...data});

    if (!result) throw new Error("No se puede crear el comentario");

    await result.save();

    return result;
}