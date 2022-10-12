const { getFeedbacks, addFeedback } = require('../services/feedbackService');

const getFeedbacksController = async (req, res) => {
  const feedbacks = await getFeedbacks();
  res.json({ feedbacks });
};

const addFeedbackController = async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = await addFeedback({ name, email, message });
  res.status(201).json(feedback);
};

module.exports = {
  getFeedbacksController,
  addFeedbackController,
};
