const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeControllers');

router.get('/',storeController.myMiddleWare ,storeController.homePage);

module.exports = router;
