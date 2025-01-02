import { Request, Response } from 'express';
import { httpResponses } from '../config/helpers/ErrorCodes';
import {
  getProductsService,
  getProductService,
  createProductService,
  updateProductService,
  deleteProductService,
} from '../services/product.service';
import { validationResult } from 'express-validator';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const products = await getProductsService(query);
    if (products.length === 0)
      return httpResponses.NotFound(res, 'No products found');
    return httpResponses.Ok(res, products);
  } catch (error: any) {
    return httpResponses.Error(res, error.message || 'Internal server error');
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const id = Array.isArray(req.query?.id) ? req.query.id[0] : req.query.id || '';
    const product = await getProductService(id);
    if (!product) return httpResponses.NotFound(res, 'Product not found');
    return httpResponses.Ok(res, product);
  } catch (error: any) {
    return httpResponses.Error(res, error.message || 'Internal server error');
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = req.body;
    const product = await createProductService(data);
    return httpResponses.Ok(res, product);
  } catch (error: any) {
    return httpResponses.Error(res, error.message || 'Internal server error');
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const id = data._id;
    const product = await updateProductService(id, data);
    return httpResponses.Ok(res, product);
  } catch (error: any) {
    return httpResponses.Error(res, error.message || 'Internal server error');
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try{
    const id = Array.isArray(req.query?.id) ? req.query.id[0] : req.query.id || '';
    const response = await deleteProductService(id);
    return httpResponses.Ok(res,response)
  } catch (error: any){
    return httpResponses.Error(res, error.message || 'Internal server error');
  }
}