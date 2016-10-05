var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/linebot', function (req, res, next) {
  res.json({'hi':'from server'});
});

module.exports = router;
