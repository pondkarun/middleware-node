import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import jwt_decode from "jwt-decode";
import config from '../config'
import { ReqRequest } from '../interface/request.interface';
import { TokenProfile } from '../interface/auth.interface';

const authenticateToken = (req: ReqRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1]
    jwt.verify(token, config.JWT_SECRET ?? "", (err: any) => {
        if (err) {
            return res.sendStatus(403)
        }
        const model: TokenProfile = jwt_decode(token),
            dateNow: Date = new Date();

        req.token = token;
        req.allkons = model.allkons;
        req.usr_id = model.profile.usr_id;
        req.created_by = model.profile.usr_id;
        req.updated_by = model.profile.usr_id;
        req.created_date = dateNow;
        req.updated_date = dateNow;
        req.allkons = model.allkons;

        next()
    })

    // next();
}

export default authenticateToken