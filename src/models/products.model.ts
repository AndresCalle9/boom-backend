import mongoose from 'mongoose';

export interface Product {
    id: number;
    name: string;
    quantityAvailable: number;
    quantitySold: number;
    createdAt: Date;
    updatedAt: Date;
  }

  const ProductsSchema = new mongoose.Schema<Product>({
    name: {type: String, required: true},
    id: {type: Number},
    quantityAvailable: {type:Number, required: true},
    quantitySold: {type:Number},
    createdAt: {type:Date},
    updatedAt:{type:Date},
  });
  
export const ProductModel = mongoose.model('Products', ProductsSchema);