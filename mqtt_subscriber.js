// Tyler Tobin
// MQTT Node JS and Raspberry Pi Server
// Subscriber

const mqtt = require('mqtt');

const serverIP = 'HIDEN, REPLACE WITH RPI IP ADD';
const serverPort = 1883;
const serverURL = `mqtt://${serverIP}:${serverPort}`;
const client = mqtt.connect(serverURL);

client.on('connect', () => {
  console.log('Succesfully connected to MQTT Server!');

  const topic = 'SolarPanel';
  client.subscribe(topic, (err) => {
    if (err) {
      console.error('Error connecting:', err);
    } else {
      console.log(`Subscribed to topic: "${topic}"`);
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Incoming Data: "${topic}": ${message.toString()}`);

});

client.on('error', (err) => {
  console.error('Error:', err);
});

// Can be used as part of a multiple subscriber setup