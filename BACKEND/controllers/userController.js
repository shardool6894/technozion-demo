const mongoose = require('mongoose');
const User = require('../models/User');

const getUserEvents = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user id' });
        }

        const user = await User.findById(userId)
            .select('events')
            .populate('events') // swap for .populate('events', 'name startTime endTime venue club') to trim the payload
            .lean();

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            userId,
            count: user.events.length,
            events: user.events
        });
    } catch (err) {
        console.error('getUserEvents error:', err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUserEvents };
