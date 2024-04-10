import {Product} from '../models/products.model';
import {getAll, getById, create, update} from '../repositories/products.repository';

export const getProductsService = async (query: any) => {
      let products: Product[] = await getAll(query);

      return products
    }

export const getProductService = async (query: any) => {
        
    
        return 'product'
        }

export const createProductService = async (data: any) => {
    data.createdAt = new Date();
    data.updatedAt = new Date();
    if (!data.quantitySold) data.quantitySold = 0;
    let product: Product = await create(data);
    return product
    }

export const updateProductService = async (id:string,data: any) => {
    data.updatedAt = new Date();
    let product: Product = await update(id,data);

    return product
    }