var express = require('express');
var router = express.Router();

var temp = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/kirim', function (req, res){
	res.send(req.body);
});

router.post('/create', function (req, res) {
  console.log('data diterima dengan isi : ', req.body.pesanP)
  let dataN = {
    pesan: req.body.pesanP,
    sender: req.body.senderP
  };
  temp.push(dataN);
  console.log("data sekarang : ",temp);
});

router.get('/get', function(req, res){
  console.log('Ambil data done, data : ');
  console.log(temp);
  res.json(temp);
});


module.exports = router;
