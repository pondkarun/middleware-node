import { Response, NextFunction } from 'express';
const authenticateToken = (req: any, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1]
   
    console.log('1111 :>> ', 1111);
    next();
}

export default authenticateToken