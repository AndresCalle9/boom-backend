const { IngredientModel } = require('../models/ingredient.model');
const aqp = require('api-query-params');

export const getAll = async (query : any) => {
const { filter, skip, limit, sort, projection, population } = aqp(query);
  return IngredientModel.find(filter)
  .skip(skip)
  .limit(limit)
  .sort(sort)
  .select(projection)
  .populate(population);
};

export const getById = async (id : string) => {
  return IngredientModel.findById({_id:id});
};

export const create = async (data : any) => {
    return IngredientModel.create(data);
    }

export const update = async (id: string, data : any) => {
    return IngredientModel.findByIdAndUpdate({_id:id}, data, {new: true});
  }
