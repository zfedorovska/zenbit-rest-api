const Joi = require('joi');
const { ValidationError } = require('../helpers/errors');

const feedbackSchema = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().email({ tlds: false }).required(),
  message: Joi.string().min(3).max(200).required(),
});

const validate = (schema, missingBodyMessage) => (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: missingBodyMessage });
    return;
  }
  const { error } = schema.validate(req.body);
  if (error) {
    next(new ValidationError(error.details[0].message));
  } else {
    next();
  }
};

const validateFeedbackBody = validate(feedbackSchema, 'missing fields');

module.exports = {
  validateFeedbackBody,
};
