import { Request, Response, NextFunction } from 'express';
import { CustomError } from "../helpers/CustomError";
import {HttpStatus} from '../helpers/ErrorCodes'

export const errorHandler = (error : Error, req: Request, res : Response, next: NextFunction) => {
  if(error instanceof CustomError) {
    const { statusCode,message } = error;
    return res.status(statusCode).send(message);
  }

  // Unhandled errors
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ errors: [{ message: "Something went wrong. Please try again" }] });
};

