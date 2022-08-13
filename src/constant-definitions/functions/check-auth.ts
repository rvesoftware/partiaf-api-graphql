import jwt from 'jsonwebtoken';

export default (context: any) => {
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, process.env.JWT_SIGNIN_KEY || "");
                return user;
            }catch(err){
                throw new Error("601");
            }
        }
        throw new Error("602");
    }

    throw new Error("603");
} 