const { db } = require('../db/connection');

const getFeedbacks = async () => {
  const result = await db.select('*').from('feedbacks').limit(10);
  return result;
};

const addFeedback = async ({ name, email, message }) => {
  const result = db.insert({ name, email, message }).into('feedbacks');
  return result;
};

module.exports = {
  getFeedbacks,
  addFeedback,
};
