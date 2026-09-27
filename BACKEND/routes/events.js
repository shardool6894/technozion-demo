const express = require('express');
const router = express.Router();
const { protect, requireAdmin } = require('../middleware/auth');

const {
    listEvents,
    createEvent,
    updateEvent,
    getEvent,
    getEventRegistrations
} = require('../controllers/eventController');

router.get('/', listEvents);
router.post('/', protect, requireAdmin, createEvent);
router.get('/:eventId', getEvent);
router.put('/:eventId', protect, requireAdmin, updateEvent);
router.get('/:eventId/registrations', protect, requireAdmin, getEventRegistrations);

module.exports = router;