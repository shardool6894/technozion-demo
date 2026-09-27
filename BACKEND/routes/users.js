const express = require('express');
const router = express.Router();

const { getUserEvents } = require('../controllers/userController');

router.get('/:userId/events', getUserEvents);

module.exports = router;