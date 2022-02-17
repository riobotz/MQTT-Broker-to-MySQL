import MKY03 from '../models/mky003.js'

export default {

    processMessage: (message, topic, packet) => {

        if (message.toString() !== '0') {

            const JSONObj = JSON.parse(message.toString().substring(1, message.toString().length - 1))
            
            console.log(JSONObj);

            MKY03.create({

                // Temperatures -----------------------------
                RecvDischargeTemp:              JSONObj.t1,
                CompDischargeTemp:              JSONObj.t2,
                CoolantTemp:                    JSONObj.t3,
                HydOilTemp:                     JSONObj.t4,
                EngineOilTemp:                  JSONObj.t5,

                // Pressures -------------------------------
                InterstagePressure:             JSONObj.p1,
                SumpPressure:                   JSONObj.p2,
                DownholeAirPressure:            JSONObj.p3,
                RotationPressure:               JSONObj.p4,
                HoldbackPressure:               JSONObj.p5,
                PilotPressure:                  JSONObj.p6,
                PulldownPressure:               JSONObj.p7,
                MainPumpPressure:               JSONObj.p8,
                FanPumpPressure:                JSONObj.p9,
                Pump3Pressure:                  JSONObj.pa,
                Pump4Pressure:                  JSONObj.pb,
                FMClampPressure:                JSONObj.pc,
                EngineOilPressure:              JSONObj.pd,

                // RPMs----------------------------------
                EngineRpm:                      JSONObj.r1,
                HeadRpm:                        JSONObj.r2,
                CoolingFanRpm:                  JSONObj.r3,

                // Levels ------------------------------
                FuelTankLvl:                    JSONObj.l1,
                WaterTankLvl:                   JSONObj.l2,

                // Angles -------------------------------
                DeckFrontPitch:                 JSONObj.a1,
                DeckFrontRoll:                  JSONObj.a2,
                DeckRearPitch:                  JSONObj.a3,
                DeckRearRoll:                   JSONObj.a4,
                FMAngle:                        JSONObj.a5,
                MastAngle:                      JSONObj.a6,
                CycPitch:                       JSONObj.a7,
                CycRoll:                        JSONObj.a8,

                // Setpoints ------------------------------
                CatPumpSP:                      JSONObj.s1,
                DynasetPumpSP:                  JSONObj.s2,
                EngineRPMSP:                    JSONObj.s3,
                RotationLimSP:                  JSONObj.s4,
                HoldbackSP:                     JSONObj.s5,
                PulldownSP:                     JSONObj.s6,
                AirSP:                          JSONObj.s7,


                //Misc -------------------------------------
                HeadPosition:                   JSONObj.m1,
                FMPosition:                     JSONObj.m2,
                FuelUsed:                       JSONObj.m3,
                EngineLoad:                     JSONObj.m4,
                EngineHours:                    JSONObj.m5,
                CatPumpFlow:                    JSONObj.m6,
                DynasetPumpFlow:                JSONObj.m7,


                //Packed Booleans -------------------------------------
                CanStatusB1:                    JSONObj.b1,
                CanStatusB2:                    JSONObj.b2,
                CanStatusB3:                    JSONObj.b3,
                BaseAnaError1:                  JSONObj.b4,
                BaseAnaError2:                  JSONObj.b5,
                BaseAnaError3:                  JSONObj.b6,
                BaseDigInputs1:                 JSONObj.b7,
                BaseDigInputs2:                 JSONObj.b8,
                BaseDigInputs3:                 JSONObj.b9,
                BaseFuncStatus1:                JSONObj.ba,
                BaseFuncStatus2:                JSONObj.bb,
                BaseDigOutputs1:                JSONObj.bc,
                BaseDigOutputs2:                JSONObj.bd,
                BaseDigOutputs3:                JSONObj.be,

                BaseFuncStatus2:                JSONObj.bf,
                BaseDigOutputs1:                JSONObj.b10,
                BaseDigOutputs2:                JSONObj.b11,
                BaseDigOutputs3:                JSONObj.b12,


                // Booleans ----------------------------------------------------------------------------

                // Valve Banks
                BVB1_OK:                        JSONObj.a,
                BVB2_OK:                        JSONObj.a,
                BVB3_OK:                        JSONObj.a,
                BVB4_OK:                        JSONObj.a,
                MVB1_OK:                        JSONObj.a,
                MVB2_OK:                        JSONObj.a,

                // Controls
                JS1_OK:                         JSONObj.a,
                JS2_OK:                         JSONObj.a,
                JS3_OK:                         JSONObj.a,
                KP1_OK:                         JSONObj.a,
                KP2_OK:                         JSONObj.a,
                RKP_OK:                         JSONObj.a,
                NBB_OK:                         JSONObj.a,
                CAN_OK:                         JSONObj.a,

                // Inputs
                CycSpClosedPrx:                 JSONObj.a,
                MastHome:                       JSONObj.a,
                CoolantlvlOk:                   JSONObj.a,
                Pump1Prx:                       JSONObj.a,
                Pump2Prx:                       JSONObj.a,
                Pump3Prx:                       JSONObj.a,
                Pump4Prx:                       JSONObj.a,
                MastLockIn:                     JSONObj.a,
                MastLockOut:                    JSONObj.a,
                EstopOK:                        JSONObj.a,
                FMRodPrx1:                      JSONObj.a,
                FMRodPrx2:                      JSONObj.a,
                FMSlewInPrx:                    JSONObj.a,
                FMSlewOutPrx:                   JSONObj.a,
                FMClampOpen:                    JSONObj.a,
                FireSuppPrOK:                   JSONObj.a,

                // HMI Mode
                DrillMode:                      JSONObj.a,
                RPMode:                         JSONObj.a,
                WirelineMode:                   JSONObj.a,
                SetupMode:                      JSONObj.a,

                // Outputs
                HornOn:                         JSONObj.a,
                CatPumpOn:                      JSONObj.a,
                DynasetOn:                      JSONObj.a,
                HmOilOn:                        JSONObj.a,
                FMClampClosed:                  JSONObj.a,
                TopBORotOn:                     JSONObj.a,
                BotBORotOn:                     JSONObj.a,
                TopBOClampOn:                   JSONObj.a,
                BotBOClampOn:                   JSONObj.a,
                WlnWinchOn:                     JSONObj.a,
                HeadTraverseActive:             JSONObj.a,
                SFActive:                       JSONObj.a,
                HeadRotationActive:             JSONObj.a,
                TSActive:                       JSONObj.a,
                SlipsTActive:                   JSONObj.a,
                FMTraverseActive:               JSONObj.a,
                FMTiltActive:                   JSONObj.a,
                FMSlewActive:                   JSONObj.a,
                FMClampClosedActive:            JSONObj.a,
                FMClampOpenActive:              JSONObj.a,
                TramFrontLeft:                  JSONObj.a,
                TramFrontRight:                 JSONObj.a,
                TramRearLeft:                   JSONObj.a,
                TramRearRight:                  JSONObj.a,
                TramHigh:                       JSONObj.a,
                RadioCycActive:                 JSONObj.a,
                RadioSetupActive:               JSONObj.a,
                RadioTrammingActive:            JSONObj.a,
                CompStartRun:                   JSONObj.a,
                AirVent:                        JSONObj.a,
                BoosterTaps:                    JSONObj.a,
                AuxAirTap:                      JSONObj.a,
                EnginePrimer:                   JSONObj.a,
                EngineIgn:                      JSONObj.a,
                StartCondOk:                    JSONObj.a,
                BoosterRunning:                 JSONObj.a,
                BoosterLoaded:                  JSONObj.a,



                timestamp:                      JSONObj.a,

            }).then(() => { console.log('Rig03 Entry Added') })
                .catch(error => console.log(error));

        }
    }


}