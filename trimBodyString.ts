import { Response, NextFunction } from 'express';
import { isArray, isPlainObject, isString } from 'lodash';

const trimBodyString = (req: any, res: Response, next: NextFunction) => {
  const body = req.body;

  const trimData = (obj: any) => {
    if (isPlainObject(obj)) {
      Object.entries(obj).forEach(([key, value]: any) => {
        if (isString(value)) {
          obj[key] = value.trim()
        }
      });
      return obj;
    } else {
      if (isString(obj)) {
        return obj.trim()
      }
    }
  }

  if (isArray(body)) {
    for (let index = 0; index < body.length; index++) {
      const e = body[index];
      body[index] = trimData(e);
    }
  } else {
    trimData(body)
  }

  next()
}

export default trimBodyString;