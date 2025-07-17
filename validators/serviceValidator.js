import Joi from 'joi';

export const serviceSchema = Joi.object({
  id: Joi.number().integer().min(1), // optional if you auto-generate
  name: Joi.string().min(2).required(),
  provider: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  createdAt: Joi.date().iso() // optional if added automatically
});
