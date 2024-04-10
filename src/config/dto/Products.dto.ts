import { body, query } from 'express-validator';
import { validateKey } from '../middlewares/tokenValidation.middleware';

export const createProductDto = [
    body('name').notEmpty().withMessage('Name is required'),
    body('quantityAvailable').notEmpty().withMessage('Quantity Available is required'),
    validateKey
  ];

export const getProductDto = [
  query('_id').notEmpty().withMessage('Id is required'),
  validateKey
]


  