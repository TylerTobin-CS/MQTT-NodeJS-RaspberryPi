// Tyler Tobin
// MQTT System between Node JS and Raspberry Pi as broker/server
// Publisher

const mqtt = require('mqtt');
const serverIP = 'HIDEN, REPLACE WITH RPI IP ADD'; 
const serverPort = 1883; 
const serverUrl = `mqtt://${serverIP}:${serverPort}`;
const client = mqtt.connect(serverUrl);

client.on('connect', () => {
  console.log('Successfully connected to MQTT Server');

  const topic = 'SolarPanel';
  const message = '6.22 volts, 0.51 amps';
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(`Data Sent: "${message}" "${topic}"`);
    }

    client.end();
  });
});

client.on('error', (err) => {
  console.error('Error:', err);
});

// Can be part of a series of publishers