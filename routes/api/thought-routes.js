const router = require('express').Router();

// Thoughts & reactions destructuring
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/reactions
router.route('/').post(createReaction);

// /api/reactions/:reactionId
router.route('/:reactionId').delete(deleteReaction);

module.exports = router;