const express = require('express');
const { getAllBookingIds } = require('../controllers/bookingidcontrollers');

const router = express.Router();

router.get('/', getAllBookingIds);

module.exports = router;
