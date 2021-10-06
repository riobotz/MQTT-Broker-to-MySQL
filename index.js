// Importing Dependant Packages
import mqtt from "mqtt";
import fs from 'fs';

import Rig21 from './rigs/rig21.js';
import Rig08 from "./rigs/rig08.js";

import db from "./models/index.js";

const syncModels = async () => {
    // db.MKY021.sync();
    db.MKY08.sync();
}

// mosquitto_pub --cafile ca.crt --cert client.crt --key client.key -p 8883 -t /chriskl -m "de"

const KEY = fs.readFileSync('../Local Certs - Client/client.key');
const CERT = fs.readFileSync('../Local Certs - Client/client.crt');
const CAfile = fs.readFileSync('../Local Certs - Client/ca.crt');


syncModels().then(() => {
    // Defining Mqtt Broker Details
    const mqttTopic = "#";
    const Broker_URL = "mqtt://localhost";
    const options = {
        mqttClientID: "MqttBrokerToDB",
        port: 8883,
        keepalive: 60,
        protocol: 'mqtts',    //also add this
        // protocolId: 'MQIsdp',
        ca: CAfile,
        keyPath: KEY,
        certPath: CERT,
        // protocolId: 'MQIsdp',
        // protocolVersion: 3
    };

    // console.log(KEY)
    // console.log("")
    // console.log(CERT)
    // console.log("")
    // console.log(CAfile)

    const mqtt_connect = () => {
        console.log("Connecting to Broker");
        client.subscribe(mqttTopic, mqtt_subscribe);
    }

    const mqtt_reconnect = (error) => {
        console.log("Attempting to Reconnect to MQTT Broker")
        if (error) { console.log(error); }
        client = mqtt.connect(Broker_URL, options);
    }

    const mqtt_error = (error) => {
        console.log("Error!");
        if (error) { console.log(error); }
    }

    // const after_publish = () => {
    //     //Whatever i want
    // }

    const mqtt_messageReceived = (topic, message, packet) => {
        // console.log(packet)
        // console.log(message.toString())
        const shortTopic = topic.substring(0,13)
        const preRig = shortTopic.substring(0,8);
        const newString = topic.substring(0, 5);
        // console.log(shortTopic, "Short Topic")
        // console.log(preRig, "PRE RIGS")

        // console.log(topic)
        // console.log(newString)

        switch (newString) {

            // Rig 3 Message Handler
            case ('shortTopic'):
                console.log('Message from Rig 7');
                break;
            
            // Rig 6 Message Handler
            case 'Rig06':
                console.log('Message from Rig 7');
                break;

            // Rig 7 Message Handler
            case 'Rig07':
                console.log('Message from Rig 7');
                break;

            // Rig 8 Message Handler
            case 'Rig08':
                //console.log('Message from Rig08');
                Rig08.processMessage(message, topic, packet)
                break;
            
            // Rig 18 Message Handler
            case 'Rig18':
                console.log('Message from Rig 7');
                break;

            // Rig 21 Message Handler
            case (preRig + 'Rig21'):
                // console.log('Message from Rig 21');
                Rig21.processMessage(message, topic, packet)
                
                break;

            default:
                console.log('External Topic Published')

        }

    };

    const mqtt_close = () => {
        console.log("Close Mqtt")
    }

    const mqtt_subscribe = (error, granted) => {
        console.log("Subscribed to " + mqttTopic);
        console.log("Granted " + granted);
        if (error) { console.log(error); }
    }

    // Adding Mqtt event Listeners
    var client = mqtt.connect(Broker_URL, options);
    client.on('connect', mqtt_connect);
    client.on('reconnect', mqtt_reconnect);
    client.on('error', mqtt_error);
    client.on('message', mqtt_messageReceived);
    client.on('close', mqtt_close);

});
