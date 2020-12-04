import mqtt from "mqtt";
import mysql from "mysql";

const mqttTopic = "chriskl";
const Broker_URL = "mqtt://localhost";
const options = {
    mqttClientID: "MqttBrokerToDB",
    port: 8883,
    keepalive:60
};


export default {
    
    mqtt_connect: () => {
        console.log("Connecting to Broker");
        client.subscribe(mqttTopic, mqtt_subscribe);
    },
    
    mqtt_reconnect: (error) => {
        console.log("Attempting to Reconnect to MQTT Broker")
        if (error) {console.log(error);}
        client = mqtt.connect(Broker_URL, options);
    },
    
    mqtt_error: (error) => {
        console.log("Error!");
        if (error) {console.log(error);}
    },
    
    after_publish: () => {
        //Whatever i want
    },
    
    mqtt_messageReceived: (topic, message, packet) => {
        console.log("Topic = " + topic + " Message= " + message);
        sendToDB(topic, message);
    },
    
    mqtt_close: () => {
        console.log("Close Mqtt")
    }
}

const mqtt_subscribe = (error, granted) => {
    console.log("Subscribed to " + mqttTopic);
    console.log("Granted " + granted)
    if (error) {console.log(error);}
}

const sendToDB = (topic, message) => {
    connection.connect((error) => {
        let sql = "INSERT INTO ?? (??,??,??) VALUES (?,?,?)";
        const params = ["booster", "clientID", "topic", "message", options.mqttClientID, topic, message];
        sql = mysql.format(sql, params);
        connection.query(sql, (error, results) => {
            if (error) throw error;
            console.log("Data Inserted! Data: " + results);
        })
    })
}