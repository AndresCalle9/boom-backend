const { ProductModel } = require('../models/products.model');
const aqp = require('api-query-params');

export const getAll = async (query : any) => {
const { filter, skip, limit, sort, projection, population } = aqp(query);
  return ProductModel.find(filter)
  .skip(skip)
  .limit(limit)
  .sort(sort)
  .select(projection)
  .populate(population);
};

export const getById = async (id : string) => {
  return ProductModel.findById({_id:id});
};

export const create = async (data : any) => {
    return ProductModel.create(data);
    }

export const update = async (id: string, data : any) => {
    return ProductModel.findByIdAndUpdate({_id:id}, data, {new: true});
  }

export const deleteProduct = async (id: string) => {
  return ProductModel.findByidAnddelete({_id:id})
}