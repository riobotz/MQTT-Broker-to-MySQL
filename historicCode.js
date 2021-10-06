       // const parsedObject = JSON.parse(message);

        // if (parsedObject.p1) {
        //     // MQTT Publish 1
        //     mqttData.ts = parseInt(parsedObject.p1.ts);
        //     mqttData.engineRPM1 = parseInt(parsedObject.p1.a);
        //     mqttData.engineRPM2 = parseInt(parsedObject.p1.b);
        //     mqttData.oilPressure1 = parseInt(parsedObject.p1.c);
        //     mqttData.oilPressure2 = parseInt(parsedObject.p1.d);
        //     //engineHours1: parsedObject.p1.a,
        //     //engineHours2: parsedObject.p1.a,
        //     mqttData.coolantTemp1 = parseInt(parsedObject.p1.e);
        //     mqttData.coolantTemp2 = parseInt(parsedObject.p1.f);
        //     mqttData.headPosition1 = parseInt(parsedObject.p1.g);
        //     mqttData.headPosition2 = parseInt(parsedObject.p1.h);

        // } else if (parsedObject.p2) {

        //     // MQTT Publish 2
        //     mqttData.holeDepth1 = parseInt(parsedObject.p2.a);
        //     mqttData.holeDepth2 = parseInt(parsedObject.p2.b);
        //     mqttData.holeDepth3 = parseInt(parsedObject.p2.c);
        //     mqttData.holeDepth4 = parseInt(parsedObject.p2.d);
        //     mqttData.rotationRpm1 = parseInt(parsedObject.p2.e);
        //     mqttData.rotationRpm2 = parseInt(parsedObject.p2.f);
        //     mqttData.penetrationRate1 = parseInt(parsedObject.p2.g);
        //     mqttData.penetrationRate2 = parseInt(parsedObject.p2.h);

        // } else if (parsedObject.p3) {

        //     // MQTT Publish 3
        //     mqttData.mastAngle1 = parseInt(parsedObject.p3.a);
        //     mqttData.mastAngle2 = parseInt(parsedObject.p3.b);
        //     mqttData.deckRoll1 = parseInt(parsedObject.p3.c);
        //     mqttData.deckRoll2 = parseInt(parsedObject.p3.d);
        //     mqttData.deckPitch1 = parseInt(parsedObject.p3.e);
        //     mqttData.deckPitch2 = parseInt(parsedObject.p3.f);
        //     mqttData.headRackBackProxyStatus = parsedObject.p3.g;
        //     mqttData.footClampPressureSwitch = parsedObject.p3.h;

        // } else if (parsedObject.p4) {

        //     // MQTT Publish 4
        //     mqttData.coolantLevelSensor = parsedObject.p4.a;
        //     mqttData.rotationReversePressure1 = parseInt(parsedObject.p4.b);
        //     mqttData.rotationReversePressure2 = parseInt(parsedObject.p4.c);
        //     mqttData.rotationForwardPressure1 = parseInt(parsedObject.p4.d);
        //     mqttData.rotationForwardPressure2 = parseInt(parsedObject.p4.e);
        //     mqttData.holdBackPressure1 = parseInt(parsedObject.p4.f);
        //     mqttData.holdBackPressure2 = parseInt(parsedObject.p4.g);
        //     mqttData.pulldownPressure1 = parseInt(parsedObject.p4.h);

        // } else if (parsedObject.p5) {

        //     // MQTT Publish 5
        //     mqttData.pulldownPressure2 = parseInt(parsedObject.p5.a);
        //     mqttData.waterPressure1 = parseInt(parsedObject.p5.b);
        //     mqttData.waterPressure2 = parseInt(parsedObject.p5.c);
        //     mqttData.mainPumpPressure1 = parseInt(parsedObject.p5.d);
        //     mqttData.mainPumpPressure2 = parseInt(parsedObject.p5.e);
        //     mqttData.winchDownPressure1 = parseInt(parsedObject.p5.f);
        //     mqttData.winchDownPressure2 = parseInt(parsedObject.p5.g);
        //     mqttData.winchUpPressure1 = parseInt(parsedObject.p5.h);
        //     mqttData.winchUpPressure2 = parseInt(parsedObject.p5.i);

        // } else {
        //     console.log("ERROR, EXTRA FIELD!");
        // }


        
        let dataToBeSent = {

            ts: mqttData.ts,
            engineRpm: mqttData.engineRPM2 * 256 + mqttData.engineRPM1 || "Script Starting",
            oilPressure: mqttData.oilPressure2 * 256 + mqttData.oilPressure1 || "Script Starting",
            engineHours: 0,
            coolantTemp: mqttData.coolantTemp2 * 256 + mqttData.coolantTemp1 || "Script Starting",
            headPosition: mqttData.headPosition2 * 256 + mqttData.headPosition1 || "Script Starting",
            holeDepth: mqttData.holeDepth2 * 256 + mqttData.holeDepth1 || "Script Starting",
            rotationRpm: mqttData.rotationRpm2 * 256 + mqttData.rotationRpm1 || "Script Starting",
            penetrationRate: mqttData.oilPressure2 * 256 + mqttData.oilPressure1 || "Script Starting",
            mastAngle: mqttData.mastAngle2 * 256 + mqttData.mastAngle1 || "Script Starting",
            deckRoll: mqttData.deckRoll2 * 256 + mqttData.deckRoll1 || "Script Starting",
            deckPitch: mqttData.deckPitch2 * 256 + mqttData.deckPitch1 || "Script Starting",
            headRackBackProxyStatus: mqttData.headRackBackProxyStatus,
            footClampPressureSwitch: mqttData.footClampPressureSwitch,
            coolantLevelSensor: mqttData.coolantLevelSensor,
            rotationReversePressure: mqttData.rotationReversePressure2 * 256 + mqttData.rotationReversePressure1 || "Script Starting",
            rotationForwardPressure: mqttData.rotationForwardPressure2 * 256 + mqttData.rotationForwardPressure1 || "Script Starting",
            holdBackPressure: mqttData.holdBackPressure2 * 256 + mqttData.holdBackPressure1 || "Script Starting",
            pulldownPressure: mqttData.pulldownPressure2 * 256 + mqttData.pulldownPressure1 || "Script Starting",
            waterPressure: mqttData.waterPressure2 * 256 + mqttData.waterPressure1 || "Script Starting",
            mainPumpPressure: mqttData.mainPumpPressure2 * 256 + mqttData.mainPumpPressure1 || "Script Starting",
            winchDownPressure: mqttData.winchDownPressure2 * 256 + mqttData.winchDownPressure1 || "Script Starting",
            winchUpPressure: mqttData.winchUpPressure2 * 256 + mqttData.winchUpPressure1 || "Script Starting",

        };