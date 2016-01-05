var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers['accept-language'].split(',')[0];
  var software = req.headers['user-agent'].split('(')[1].split(")")[0];
  
  console.log(req.headers);
  
  res.json({ "ipaddress": ip,
            "language":lang,
            "software": software});
});

module.exports = router;
