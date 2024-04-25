import { Request, Response } from 'express';
import { httpResponses} from '../config/helpers/ErrorCodes'
import { getProductsService, getProductService, createProductService } from '../services/product.service';
import {validationResult } from 'express-validator';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const products = await getProductsService(query);
    if (products.length === 0) return httpResponses.NotFound(res, 'No products found')
    return httpResponses.Ok(res, products);
  } catch (error: any) {
    return httpResponses.Error(res, error.message || "Internal server error");
  }
}

export const getProduct = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const query = req.query;
        const product = await getProductService(query);
        if (!product) return httpResponses.NotFound(res, 'Product not found')
        return httpResponses.Ok(res, product);
    } catch (error: any) {
      return httpResponses.Error(res, error.message || "Internal server error");
    }
  }

export const createProduct = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const data = req.body;
        const product = await createProductService(data);
        return httpResponses.Ok(res, product);
    } catch (error: any) {
      return httpResponses.Error(res, error.message || "Internal server error");
    }
    }
