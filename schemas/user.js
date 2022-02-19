const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  comment: Joi.string().min(20).max(10000).required(),
});

module.exports = userSchema;
