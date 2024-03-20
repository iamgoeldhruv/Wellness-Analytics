const express = require('express');
const router = express.Router();
const { getBookingsByBookingId }= require('../controllers/testdetailscontroller');
router.get('/', getBookingsByBookingId);
module.exports = router;
