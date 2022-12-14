import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function isValidToken(req, res, next){
    
    const authorization = req.headers.authorization;
    const token = authorization.replace(/Bearer |'/g, '');
    const jwt = jsonwebtoken;
    const SECRET_KEY = process.env.JWT_SECRET;
    
    if(!authorization){

        return res.sendStatus(401);
    
    } else {
    
        jwt.verify(token, SECRET_KEY, (error) => {
            if(error){
                return res.status(401).send(error);
            }
        });
    
    }
    
    const decode = jwt.verify(token, SECRET_KEY);
    
    res.locals.decode = decode;
    next();

}