const express = require('express');
const path = require('path');
const router = express.Router();
const authController = require('../controllers/auth');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_MAIN_FILE = path.join(DIST_DIR, 'index.html');
const HTML_LOGIN_FILE = path.join(DIST_DIR, 'login.html');
const HTML_REGISTER_FILE = path.join(DIST_DIR, 'register.html');
const HTML_GAME_FILE = path.join(DIST_DIR, 'game.html');


router.post('/register', authController.register );


module.exports = router;