const express = require('express');
const { uploadPlay } = require('../controllers/playController');

const router = express.Router();

router.post('/upload', uploadPlay);

module.exports = router;