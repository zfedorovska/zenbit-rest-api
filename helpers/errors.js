class FeedbacksRestApiError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends FeedbacksRestApiError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotFoundError extends FeedbacksRestApiError {
  constructor(message) {
    super('Not found');
    this.status = 404;
  }
}

module.exports = {
  FeedbacksRestApiError,
  ValidationError,
  NotFoundError,
};
