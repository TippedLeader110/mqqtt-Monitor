var mqtt=require('mqtt');


const mPintu = function(topic){
    pesan = ''
    var client = mqtt.connect("mqtt://broker.hivemq.com")
    client.on("connect",function(){	
        console.log("Subscribing to ", topic);
        
        })
    client.subscribe(topic,{qos:1});
    client.on('message',function(topic, message, packet){
        // pesan.push(JSON.parse(String(message)))
        console.log('Get Data')
        pesan = String(message)
    });
    return pesan
}

module.exports = {
    mPintu : mPintu
}