import MKY021 from "../models/mky021"

export default {

    processMessage: (message, topic, packet) => {
        if (message.toString() !== '0') {

            const JSONObj = JSON.parse(message.toString().substring(1, message.toString().length - 1))

            MKY021.create({
                engineRpm: JSONObj.a,
                oilPressure: JSONObj.a,
                engineHours: JSONObj.a,
                coolantTemp: JSONObj.a,
                headPosition: JSONObj.a,
                holeDepth: JSONObj.a,
                rotationRpm: JSONObj.a,
                penetrationRate: JSONObj.a,
                bitWeight: JSONObj.a,
                outsideTemp: JSONObj.a,
                mastAngle: JSONObj.a,
                deckRoll: JSONObj.a,
                deckPitch: JSONObj.a,
                rodLoaderPosition: JSONObj.a,
                headRefPosition: JSONObj.a,
                rotationReversePressure: JSONObj.a,
                rotationForwardPressure: JSONObj.a,
                holdBackPressure: JSONObj.a,
                pulldownPressure: JSONObj.a,
                waterPressure: JSONObj.a,
                mainPumpPressure: JSONObj.a,
                driller: JSONObj.a,
                compressorSumpPressure: JSONObj.a,
                compressorDischargeTemperature: JSONObj.a,
                compressorLinePressure: JSONObj.a,
                compressorInterstagePressure: JSONObj.a,
                DownholeAirPressure: JSONObj.a,
                engineOilTemp: JSONObj.a,
                engineTorque: JSONObj.a,
                intercoolerTemp: JSONObj.a,
                totalFuelUsed: JSONObj.a,
                intakeManifoldTemp: JSONObj.a,
                turboRpm: JSONObj.a,
                electricalPotential: JSONObj.a,
                engineOilLevel: JSONObj.a,
                driller: JSONObj.a,
                timestamp: JSONObj.a,

            }).then(() => { console.log('Rig08 Entry Added') })
                .catch(error => console.log(error));

        }

    }


}