import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// สร้าง middleware สำหรับตรวจสอบข้อมูลด้วย express-validator
const validatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // ตรวจสอบข้อผิดพลาดจาก req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // ถ้ามีข้อผิดพลาด ส่งกลับไปให้ client ด้วยข้อผิดพลาดที่เกิดขึ้น
        return res.status(200).json({ errors: errors.array() });
    }

    // ถ้าไม่มีข้อผิดพลาด ไปต่อไปใน middleware ถัดไป
    next();
};

export default validatorMiddleware;
