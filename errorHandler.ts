import { Request, Response, NextFunction } from "express";
import { Error } from '../interface/error.interface';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 400;
    res.status(statusCode).json({
        error: {
            status_code: statusCode,
            message: err.message,
            validation: err.validation,
        },
    });

}