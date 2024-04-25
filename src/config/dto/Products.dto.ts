import { body, query } from 'express-validator';
import { validateKey } from '../middlewares/tokenValidation.middleware';

export const createProductDto = [
    body('unit').notEmpty().withMessage('unit is required'),
    body('imageUrl').notEmpty().withMessage('imageUrl is required'),
    body('category').notEmpty().withMessage('category is required'),
    body('price').notEmpty().withMessage('price is required'),
    validateKey
  ];

export const getProductDto = [
  query('_id').notEmpty().withMessage('Id is required'),
  validateKey
]


  