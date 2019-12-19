var express = require('express');
var router = express.Router();
const messagesController = require("../controllers/messages");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', messagesController.getAllMessages);

router.post('/message', messagesController.createNewMessage);

module.exports = router;
