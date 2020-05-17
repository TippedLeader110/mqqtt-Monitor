var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var mqtt=require('mqtt');
// const doMqtt = require('../routes/model/mqtt');


dPintu = []
dListrik = []
Dmanual = []
// const mqttDo = function(topic){
//   var client = mqtt.connect("mqtt://broker.hivemq.com")
//     client.on("connect",function(){	
//         console.log("Subscribing to ", topic);
        
//         })
//     client.subscribe(topic,{qos:1});
//     client.on('message',function(topic, message, packet){
//       if(dPintu.length >= 5){
//         dPintu.shift();
//         dPintu.push(JSON.parse(String(message)))
//       }
//       else{
//         dPintu.push(JSON.parse(String(message)))
//       }
//     });
// }

const mqttDo = function(topic){
  var client = mqtt.connect("mqtt://broker.hivemq.com")
    client.on("connect",function(){	
        console.log("Subscribing to ", topic);
        
        })
    client.subscribe(topic,{qos:1});
    client.on('message',function(topic, message, packet){
      if(dPintu.length >= 5){
        dPintu.shift();
        dPintu.push(JSON.parse(String(message)))
      }
      else{
        dPintu.push(JSON.parse(String(message)))
      }
    });
}

const mqttDoManual = function(topic){
  var client = mqtt.connect("mqtt://broker.hivemq.com")
    client.on("connect",function(){	
        console.log("Subscribing to ", topic);
        
        })
    client.subscribe(topic,{qos:1});
    client.on('message',function(topic, message, packet){
        // console.log("Manual : " + String(message))
        // Dmanual.push(JSON.parse(String(message)))
        Dmanual = JSON.parse(String(message))
    });
}

mqttDo("/monHome/pintu")
// dPintu = doMqtt.mPintu('/monHome/pintu')
// doMqtt.mPintu('/monHome/pintu')
// console.log(doMqtt.mPintu('/monHome/pintu'))
// dPintu.push(JSON.parse(doMqtt.mPintu('/monHome/pintu')));


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

router.post('/doManual', function (req, res){
  mqttDoManual(req.body.topic)
  // console.log('Topic :' + req.body.topic + " , Data : " + Dmanual)
  res.json(Dmanual)
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
  res.json(JSON.parse(dPintu));
  // db.collection('pintu').find().toArray()
  //   .then(results => {
  //     // console.log(results)
  //     res.json(results);
  //   })
  //   .catch(error => console.error(error))
});


router.get('/getOverpintu', function(req, res){
  
  // let result = doMqtt.mPintu('/monHome/pintu')
  // console.log(dPintu)
  res.json(dPintu)
  
  // var collection = db.collection("pintu");
  // var query = {};
  // var sort = [ ["_id", -1] ];
  // var limit = 10;
  
  // var cursor = collection.find(query).sort(sort).limit(limit).toArray()
  //   .then(resl => {
  //     // console.log(resl)
  //     res.json(resl)
  //   }).catch(error => console.error(error));
  
});

router.get('/getListrik', function(req, res){
  var collection = db.collection("listrik");
  var query = {};
  var sort = [ ["time", 1] ];
  // var limit = 1;
  
  var cursor = collection.find(query).sort(sort).toArray()
    .then(resl => {
      // console.log(resl)
      res.json(resl)
    }).catch(error => console.error(error));
  
});

router.get('/getOverlistrik', function(req, res){
  var collection = db.collection("listrik");
  var query = {};
  var sort = [ ["time", -1] ];
  var limit = 1;
  
  var cursor = collection.find(query).sort(sort).limit(limit).toArray()
    .then(resl => {
      // console.log(resl)
      res.json(resl)
    }).catch(error => console.error(error));
  
});
  

module.exports = router;
