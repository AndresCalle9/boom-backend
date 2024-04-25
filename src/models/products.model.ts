import mongoose from 'mongoose';

export interface Product {
    id: number;
    name: object;
    imageUrl: string;
    category: string;
    price: number;
    unit: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const ProductsSchema = new mongoose.Schema<Product>({
    name: {type: Object, required: true},
    id: {type: Number},
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    unit: {type: String, required: true},
    createdAt: {type:Date},
    updatedAt:{type:Date},
  });
  
export const ProductModel = mongoose.model('Products', ProductsSchema);