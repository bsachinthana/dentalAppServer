const express = require('express');
const router = express.Router();

const complaint_controller = require('../controllers/complaint.controller');

router.get('/test', complaint_controller.test);

module.exports = router;