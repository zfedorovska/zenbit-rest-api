const express = require('express');
const router = express.Router();
const validation = require('../../middlewares/validation');

const { asyncWrapper } = require('../../helpers/apiHelpers');
const {
  getFeedbacksController,
  addFeedbackController,
} = require('../../controllers/feedbackController');

router.get('/', asyncWrapper(getFeedbacksController));
router.post(
  '/',
  validation.validateFeedbackBody,
  asyncWrapper(addFeedbackController)
);
module.exports = router;
