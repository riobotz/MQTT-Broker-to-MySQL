// Importing Dependant Packages
import mqtt from "mqtt";
import mysql from 'mysql';
import connection from "./connection.js";

//Check Variables
let count = 0;
let dataFields = 2;

// Defining Mqtt Broker Details
const mqttTopic = "myaccount/Mqtt/data/#";
const Broker_URL = "mqtt://localhost";
const options = {
    mqttClientID: "MqttBrokerToDB",
    port: 8883,
    keepalive:60
};

const mqtt_connect = () => {
    console.log("Connecting to Broker");
    client.subscribe(mqttTopic, mqtt_subscribe);
}

const mqtt_reconnect = (error) => {
    console.log("Attempting to Reconnect to MQTT Broker")
    if (error) {console.log(error);}
    client = mqtt.connect(Broker_URL, options);
}

const mqtt_error = (error) => {
    console.log("Error!");
    if (error) {console.log(error);}
}

// const after_publish = () => {
//     //Whatever i want
// }


let dataToBeSent = {
    temp: "Script Starting",
    time: "Script Starting",
    hours: "Script Starting"
};

const mqtt_messageReceived = (topic, message, packet) => {
    const parsedObject = JSON.parse(message);

    if (parsedObject.tag === "temp") {
        dataToBeSent.temp = parsedObject.v.v;
        dataToBeSent.time = parsedObject.v.ts;
    } else if (parsedObject.tag === "hours") {
        dataToBeSent.hours = parsedObject.v.v;
    }
    count++

    if (count === dataFields) {
        sendToDB(topic, dataToBeSent.temp, dataToBeSent.hours, dataToBeSent.time);
        // setTimeout(sendToDB, 10000, topic, dataToBeSent.temp, dataToBeSent.hours, dataToBeSent.time);
        count = 0
    }
};

const mqtt_close = () => {
    console.log("Close Mqtt")
}

const mqtt_subscribe = (error, granted) => {
    console.log("Subscribed to " + mqttTopic);
    console.log("Granted " + granted)
    if (error) {console.log(error);}
}

// Adding Mqtt event Listeners
const client = mqtt.connect(Broker_URL, options);
client.on('connect', mqtt_connect);
client.on('reconnect', mqtt_reconnect);
client.on('error', mqtt_error);
client.on('message', mqtt_messageReceived);
client.on('close', mqtt_close);

// MySQL Connection to DB
connection.connect((error) => {
    if (error) throw error;
    console.log("Database Connected");
});

// MySQL Helper Functions

// Send to db accepts two parameters and are then sent to the database
const sendToDB = (topic, temp, hours, time) => {
    connection.connect((error) => {
        let sql = "INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)";
        const params = ["MKY811s", "clientID", "topic", "temp", "hours", "time", options.mqttClientID, topic, temp, hours, time];
        sql = mysql.format(sql, params);
        console.log(sql);
        connection.query(sql, (error, results) => {
            if (error) throw error;
            console.log("Data Inserted! Data: " + results);
        })
    })
}