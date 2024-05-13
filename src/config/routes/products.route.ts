import { Router } from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from '../../controllers/products.controller';
import { createProductDto, getProductDto } from '../dto/Products.dto';
import { validateKey } from '../middlewares/tokenValidation.middleware';

const router = Router();

router.get('/products', validateKey, (req, res) => {
  getProducts(req, res);
});
router.get('/product', getProductDto, (req: any, res: any) => {
  getProduct(req, res);
});
router.post('/product', createProductDto, (req: any, res: any) => {
  createProduct(req, res);
});

router.put('/product', (req: any, res: any) => {
  updateProduct(req, res);
});

export default router;
