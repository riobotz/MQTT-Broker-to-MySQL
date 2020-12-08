// Importing Dependant Packages
import mqtt from "mqtt";
import MKY811 from "./models/mky811.js";

//Check Variables
let count = 0;
let dataFields = 15;

MKY811.sequelize.sync().then(() => {
// Defining Mqtt Broker Details
    const mqttTopic = "mky811/LiveData/#";
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
        plcAlarms: "Script Starting",
        engineRpm: "Script Starting",
        oilPressure: "Script Starting",
        engineHours: "Script Starting",
        fuelRate: "Script Starting",
        coolantTemp: "Script Starting",
        dischargeTemp1: "Script Starting",
        dischargeTemp2: "Script Starting",
        dischargeTemp3: "Script Starting",
        dischargeTemp4: "Script Starting",
        dischargePressure: "Script Starting",
        suctionTemp: "Script Starting",
        suctionPressure: "Script Starting",
        load: "Script Starting",
        engineLoad: "Script Starting"
    };

    const mqtt_messageReceived = (topic, message, packet) => {

        const parsedObject = JSON.parse(message);

        switch(parsedObject.tag) {
            case "Engine_Hours":
                dataToBeSent.engineHours = parsedObject.v.v;
                dataToBeSent.time = parsedObject.v.ts;
                break;
            case "Discharge_Press":
                dataToBeSent.dischargePressure = parsedObject.v.v;
                break;
            case "Engine_Coolant":
                dataToBeSent.coolantTemp = parsedObject.v.v;
                break;
            case "Load":
                dataToBeSent.load = parsedObject.v.v;
                break;
            case "Engine_RPM":
                dataToBeSent.engineRpm = parsedObject.v.v;
                break;
            case "PLC_Alarms":
                dataToBeSent.plcAlarms = parsedObject.v.v;
                break;
            case "Engine_FuelRate":
                dataToBeSent.fuelRate = parsedObject.v.v;
                break;
            case "Engine_Load":
                dataToBeSent.engineLoad = parsedObject.v.v;
                break;
            case "Engine_OilPress":
                dataToBeSent.oilPressure = parsedObject.v.v;
                break;
            case "Discharge_Temp1":
                dataToBeSent.dischargeTemp1 = parsedObject.v.v;
                break;
            case "Discharge_Temp2":
                dataToBeSent.dischargeTemp2 = parsedObject.v.v;
                break;
            case "Discharge_Temp3":
                dataToBeSent.dischargeTemp3 = parsedObject.v.v;
                break;
            case "Discharge_Temp4":
                dataToBeSent.dischargeTemp4 = parsedObject.v.v;
                break;
            case "Suction_Press":
                dataToBeSent.suctionPressure = parsedObject.v.v;
                break;
            case "Suction_Temp":
                dataToBeSent.suctionTemp = parsedObject.v.v;
                break;
            default:
                console.log("Extra Data Field! Check JMobile")
        };

        count++

        if (count === dataFields) {
            MKY811.create({
                plcAlarms: dataToBeSent.plcAlarms,
                engineRpm: dataToBeSent.engineRpm,
                oilPressure: dataToBeSent.oilPressure,
                engineHours: dataToBeSent.engineHours,
                fuelRate: dataToBeSent.fuelRate,
                coolantTemp: dataToBeSent.coolantTemp,
                dischargeTemp1: dataToBeSent.dischargeTemp1,
                dischargeTemp2: dataToBeSent.dischargeTemp2,
                dischargeTemp3: dataToBeSent.dischargeTemp3,
                dischargeTemp4: dataToBeSent.dischargeTemp4,
                dischargePressure: dataToBeSent.dischargePressure,
                suctionTemp: dataToBeSent.suctionTemp,
                suctionPressure: dataToBeSent.suctionPressure,
                load: dataToBeSent.load,
                engineLoad: dataToBeSent.engineLoad
            })
            count = 0;
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

});
