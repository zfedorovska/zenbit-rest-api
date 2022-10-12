const { FeedbacksRestApiError, NotFoundError } = require('./errors');
const asyncWrapper = controller => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof FeedbacksRestApiError) {
    return res.status(error.status).json({ message: error.message });
  }
  if (error.message.includes('Cast to ObjectId failed')) {
    next(new NotFoundError());
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
