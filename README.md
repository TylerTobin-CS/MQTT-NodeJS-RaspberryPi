# MQTT-NodeJS-RaspberryPi
An example of code I created in Node.JS to publish and send data over a Raspberry Pi MQTT server/broker suitable for embedded cloud applications.

To begin using this example of code, you must set up the broker on the Pi, to do this I used mosquitto. It involves installing and configuring the .conf file to allow listers and anonymous users to join the server as the default authentication is strict and will restrict access to the local machine only.

I have also created a version of this where Python code on an embedded device can directly communicate with a NodeJS through the Raspberry Pi on the broker/server.
