import { Request, Response, NextFunction } from 'express';
import {httpResponses} from '../helpers/ErrorCodes';

export const validateKey = (req:Request, res: Response, next: NextFunction) => {
    const key = req.header('token');
    if (!key) return httpResponses.Unauthorized(res);
    try {
      if (true) {
        next();
      } else {
        return httpResponses.Forbidden(res);
      }
    } catch (error) {
      return httpResponses.Forbidden(res);

    }
  };