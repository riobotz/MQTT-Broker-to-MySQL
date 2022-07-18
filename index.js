// Importing Dependant Packages
import mqtt from "mqtt";
import fs from 'fs';

import Rig21 from './rigs/rig21.js';
import Rig08 from "./rigs/rig08.js";
import Rig03 from './rigs/rig03.js';

import db from "./models/index.js";

const syncModels = async () => {
    // db.MKY021.sync();
    db.MKY08.sync();
    db.MKY03Live.sync();
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
        console.log(packet)
        console.log(message.toString())
        const shortTopic = topic.substring(0,13)
        const preRig = shortTopic.substring(0,8);
        const newString = topic.substring(0, 5);
        //console.log(shortTopic, "Short Topic")
        // console.log(preRig, "PRE RIGS")

        // console.log(topic)
        console.log(newString)

        switch (newString) {

            // Rig 3 Message Handler
            case ('Rig03'):
                console.log('Message from Rig 3');
                Rig03.processMessage(message, topic, packet)
                break;
            
            // Rig 6 Message Handler
            case 'Rig06':
                console.log('Message from Rig 6');
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


/*

var  rigData = {}

function updateJson_OnAction(me, eventInfo)
{


    function checkTag(tag) {
     if (project.getTag(tag) !== undefined) {
         return project.getTag(tag);
     } else {
         return 0;   
     }
    }
    
    // Analog Values ------------------------------------------------------------

    
    // Temperatures----------------------------------------
    rigData.t1 = checkTag('RecvDischargeTemp');     // Receiver Tank Discharge Temperature      -- GOOD
    rigData.t2 = checkTag('CompDischargeTemp');     // Compressor Discharge Temperature         -- GOOD
    rigData.t3 = checkTag('coolantTemp');           // Engine Coolant Temperature      -- J1939 -- GOOD
    rigData.t4 = checkTag('HydOilTemp');            // Hydraulic Oil Tank Temperature           -- GOOD
    rigData.t5 = checkTag('engineOilTemp');         // Engine Oil Temperature -- J1939, Need to Check
    //rigData.t6 = checkTag('');
    
    
    // Pressures----------------------------------------
    rigData.p1 = checkTag('InterstagePressure');        // Interstage Pressure      -- GOOD
    rigData.p2 = checkTag('sumpPressure');              // Sump Pressure            -- GOOD
    rigData.p3 = checkTag('downholePressure');          // Downhole Air Pressure    -- GOOD
    rigData.p4 = checkTag('rotationPressure');          // Rotation Pressure        -- GOOD
    rigData.p5 = checkTag('holdbackPressure');          // Holdback Pressure        -- GOOD
    rigData.p6 = checkTag('pilotPressure');             // Pilot Pressure           -- GOOD
    rigData.p7 = checkTag('pulldownPressure');          // Pulldown Pressure        -- GOOD
    rigData.p8 = checkTag('mainPumpPressure');          // Main Pump Pressure       -- GOOD
    rigData.p9 = checkTag('FanPumpPressure');           // Fan Pump Pressure        -- GOOD
    rigData.pa = checkTag('Pump3Pressure');             // Pump 3 Pressure          -- GOOD
    rigData.pb = checkTag('Pump4Pressure');             // Pump 4 Pressure          -- GOOD
    rigData.pc = checkTag('FMCLampPressure');           // Foremost Clamp Pressure  -- GOOD
    rigData.pd = checkTag('EngineOilPressure');         // Engine Oil Pressure -- J1939 Need to Check
    //rigData.pe = checkTag('');
    
    
    // Rpms-----------------------------------------------
    rigData.r1 = checkTag('engineRpm');                     // Engine RPM  -- GOOD
    rigData.r2 = checkTag('headRpm');                       // Head Rotation -- Currently No Sensor Installed...
    rigData.r3 = checkTag('CoolingFanRPM');                 // Not Checked.. Need to
    //rigData.r4 = checkTag('');
    
    // Levels----------------------------------------------
    rigData.l1 = checkTag('FuelTankLvl');                   // Needs Calibrating
    rigData.l2 = checkTag('WaterTankLvl');                  // Needs Calibrating
    //rigData.r3 = checkTag('');

    
    // Angles---------------------------------------------------
    rigData.a1 = checkTag('deckFrontPitch');        // Rig Front Pitch Angle     -- GOOD
    rigData.a2 = checkTag('deckFrontRoll');         // Rig Front Roll Angle      -- GOOD
    rigData.a3 = checkTag('deckRearPitch');         // Rig Rear Pitch Angle      -- GOOD
    rigData.a4 = checkTag('deckRearRoll');          // Rig Rear Roll Angle       -- GOOD
    rigData.a5 = checkTag('FMAngle');               // Foremost Angle            -- GOOD
    rigData.a6 = checkTag('mastAngle');             // Mast Angle                -- GOOD
    rigData.a7 = checkTag('CycPitch');              // Cyclone Angle             -- GOOD
    rigData.a8 = checkTag('CycRoll');               // Cyclone Roll              -- GOOD
    //rigData.r9 = checkTag('');

    
    // Setpoints------------------------------------------------
    rigData.s1 = checkTag('CatPumpSP');             // Catpump Driller Selected SetPoint            -- GOOD
    rigData.s2 = checkTag('DynasetPumpSP');         // Dynaset Driller Selected SetPoint            -- GOOD
    rigData.s3 = checkTag('EngineRPMSP');           // Engine Rpm Driller Selected SetPoint         -- GOOD
    rigData.s4 = checkTag('RotationLimSP');         // Rotation Limitor Driller Selected SetPoint   -- GOOD
    rigData.s5 = checkTag('HoldbackSP');            // Holdback Driller Selected SetPoint           -- GOOD
    rigData.s6 = checkTag('PulldownSP');            // Pulldown Driller Selected SetPoint           -- GOOD
    rigData.s7 = checkTag('AirSP');                 // Air Setpoint Driller Selected SetPoint       -- GOOD
    //rigData.r8 = checkTag('');

    
    // Misc-----------------------------------------------
    rigData.m1 = checkTag('headPosition');          // Head Position        -- LVDT Broken, On Order 15/2/2022
    rigData.m2 = checkTag('FMPosition');            // Foremost Position    -- GOOD
    rigData.m3 = checkTag('fuelUsed');              // Fuel Used, Need to grab from J1939
    rigData.m4 = checkTag('engineLoad');            // Engine Load %        -- J1939
    rigData.m5 = checkTag('engineHours');           // Engine Hours         -- J1939 Need to Check
    rigData.m6 = checkTag('CatPumpFlow');           // Cat Pump Flow        -- GOOD
    rigData.m7 = checkTag('DynasetPumpFlow');       // Dynaset Pump Flow    -- GOOD
    //rigData.r8 = checkTag('');

    
    // NEED TO CREATE ---------------------------------------
    
    // Hole Depth -- Currently Nothing Programmed to Detect
    //rigData.f = checkTag('holeDepth');
    
    // Penetration Rate -- Cannot Create Without Head Position
    //rigData.h = checkTag('penetrationRate');
    
    // Bit Weight Calculation Needs Programming.
    //rigData.i = checkTag('bitWeight');
    
    // Temperature Reading
    
 
    
    // Packed Boolean Values ------------------------------------------------
    
    //BASE -------------------------------
    
    rigData.b1 =   checkTag('CanStatusB1');         // CAN Status Base 1
    rigData.b2 =   checkTag('CanStatusB2');         // CAN Status Base 2
    rigData.b3 =   checkTag('CanStatusB3');         // CAN Status Base 3
    rigData.b4 =   checkTag('PLCBANAErrors1');      // Base PLC Analog Input Errors 1
    rigData.b5 =   checkTag('PLCBANAErrors2');      // Base PLC Analog Input Errors 2
    rigData.b6 =   checkTag('PLCBANAErrors3');      // Base PLC Analog Input Errors 3
    rigData.b7 =   checkTag('PLCBDigInputs1');      // Base PLC Digital Inputs 1
    rigData.b8 =   checkTag('PLCBDigInputs2');      // Base PLC Digital Inputs 2
    rigData.b9 =   checkTag('PLCBDigInputs3');      // Base PLC Digital Inputs 3
    rigData.ba =   checkTag('PLCBFuncStatus1');     // Base PLC Function Status 1
    rigData.bb =   checkTag('PLCBFuncStatus2');     // Base PLC Function Status 2
    rigData.bc =   checkTag('PLCBDigOutputs1');     // Base PLC Digital Outputs 1
    rigData.bd =   checkTag('PLCBDigOutputs2');     // Base PLC Digital Output 2
    rigData.be =   checkTag('PLCBDigOutputs3');     // Base PLC Digital Output 2
    
    
    // Mast ---------------------------------
    
    rigData.bf  =  checkTag('CanStatusM1');         // CAN Status Base 1
    rigData.b10 =  checkTag('PLCMANAErrors1');      // Mast PLC Analog Input Errors
    rigData.b11 =  checkTag('PLCMDigInputs1');      // Mast PLC Digital Inputs
    rigData.b12 =  checkTag('PLCMFuncStatus1');     // Mast PLC Function Status
    
    

    // Test Variable to Check if Data is Good
    rigData.test = checkTag('TestVar');
    
    var readyToSend = rigData;
   
    project.setTag('readyToSend', JSON.stringify(readyToSend));
    project.setTag('jsonString', JSON.stringify(readyToSend));

*/