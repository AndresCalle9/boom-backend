import {Product} from '../models/products.model';
import {getAll, create, update} from '../repositories/products.repository';

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
    data.name = {en: data.nameEn, es: data.nameEs};
    data.enable = true;
    delete data.nameEn;
    delete data.nameEs;
    let product: Product = await create(data);
    return product
    }

export const updateProductService = async (id:string,data: any) => {
    data.updatedAt = new Date();
    let product: Product = await update(id,data);

    return product
    }