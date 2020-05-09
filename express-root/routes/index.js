var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/", {
  useUnifiedTopology: true
}, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  db = client.db('mqtt')
})



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

router.get('/getPintu', function(req, res){
  db.collection('pintu').find().toArray()
    .then(results => {
      console.log(results)
      res.json(results);
    })
    .catch(error => console.error(error))
});


router.get('/getOverpintu', function(req, res){
  var collection = db.collection("pintu");
  var query = {};
  var sort = [ ["_id", -1] ];
  var limit = 10;
  
  var cursor = collection.find(query).sort(sort).limit(limit).toArray()
    .then(resl => {
      console.log(resl)
      res.json(resl)
    }).catch(error => console.error(error));
  
});
  
module.exports = router;
