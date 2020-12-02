// Importing Dependant Packages
import mqtt from "mqtt";
import mysql from 'mysql';
import connection from "./connection.js";

// Defining Mqtt Broker Details
const mqttTopic = "chriskl";
const Broker_URL = "mqtt://localhost";
const options = {
    mqttClientID: "MqttBrokerToDB",
    port: 8883,
    keepalive:60
};

// Defining the Mqtt Functions that will be triggered with events
const mqtt_connect = () => {
    console.log("Connecting to Broker");
    client.subscribe(mqttTopic, mqtt_subscribe);
};

const mqtt_subscribe = (error, granted) => {
    console.log("Subscribed to " + mqttTopic);
    console.log("Granted " + granted)
    if (error) {console.log(error);}
};

const mqtt_reconnect = (error) => {
    console.log("Attempting to Reconnect to MQTT Broker")
    if (error) {console.log(error);}
    client = mqtt.connect(Broker_URL, options);
};

const mqtt_error = (error) => {
    console.log("Error!");
    if (error) {console.log(error);}
};

const after_publish = () => {
    //Whatever i want
};

const mqtt_messageReceived = (topic, message, packet) => {
    console.log("Topic =" + topic + "Message= " + message);
};

const mqtt_close = () => {
    console.log("Close Mqtt")
};

// Adding Mqtt event Listeners
let client = mqtt.connect(Broker_URL, options);
client.on('connect', mqtt_connect);
client.on('reconnect', mqtt_reconnect);
client.on('error', mqtt_error),
client.on('message', mqtt_messageReceived);
client.on('close', mqtt_close);


// MySQL Connection to DB
connection.connect((error) => {
    if (error) throw error;
    console.log("Database Connected");
});

// Making DB Connection and inserting the data that was received with MQTT
connection.connect((err) => {
    const clientID = "nodeApp";
    const topic = "chrisk";
    const message = "yo";
    let sql = "INSERT INTO ?? (??,??,??) VALUES (?,?,?)";
    const params = ["booster", "clientID", "topic", "message", clientID, topic, message];
    sql = mysql.format(sql,params);
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.log("Data Inserted! Data: " + results)
    })
})
