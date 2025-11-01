import mongoose from 'mongoose';

interface ProductName {
  es: string;
  en: string;
}

export interface Product {
  id: number;
  name: ProductName;
  imageUrl: string;
  category: string;
  price: number;
  unit: string;
  enable: boolean;
  specialIcon: boolean;
  qty: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductsSchema = new mongoose.Schema<Product>({
  name: {
    type: {
      es: { type: String, required: true },
      en: { type: String, required: true },
    },
    required: true,
    _id: false
  },
  id: { type: Number },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  enable: { type: Boolean },
  specialIcon: { type: Boolean },
  qty: { type: Number },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const ProductModel = mongoose.model<Product>('Products', ProductsSchema);