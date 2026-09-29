const express = require('express');
const router = express.Router();
const { protect, requireAdmin } = require('../middleware/auth');
const { getUserEvents } = require('../controllers/userController');

router.get('/:userId/events', protect, requireAdmin, getUserEvents);

module.exports = router;