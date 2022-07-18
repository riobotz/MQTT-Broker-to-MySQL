import MKY03Live from "../models/mky003Live.js";

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = {
        date: date,
        month: month,
        year: year,
        hour: (hour),
        min: min,
        sec: sec
    };
    return time;
}

function u16DatatoBools(val) {
    var ArrayBools = [];
    for (var i = 0; i < 16; i++) {
        console.log(((val >> i).toString(2).slice(-1)))
        if (parseInt(((val >> i).toString(2).slice(-1))) === 1) {
            ArrayBools[i] = true;
        } else if (parseInt(((val >> i).toString(2).slice(-1))) === 0) {
            ArrayBools[i] = false;
        } else {
            ArrayBools[i] = false;
        }
    }
    return ArrayBools;
}

export default {

    processMessage: (message, topic, packet) => {

        if (message.toString() !== '0') {
            console.log(message);
            try {
                const JSONObj = JSON.parse(message.toString().substring(1, message.toString().length - 1))

                //console.log(JSONObj);
                let BaseAnalytic1 = u16DatatoBools(JSONObj.b13);
                let BaseAnalytic2 = u16DatatoBools(JSONObj.b14);

                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);
                // let d = u16DatatoBools(JSONObj.b1);

                let timeStamp = + new Date()

                MKY03Live.update({

                    // Temperatures -----------------------------
                    RecvDischargeTemp: JSONObj.t1,
                    CompDischargeTemp: JSONObj.t2,
                    CoolantTemp: JSONObj.t3,
                    HydOilTemp: JSONObj.t4,
                    EngineOilTemp: JSONObj.t5,
                    CompCoolerInTemp: JSONObj.t6,
                    CompCoolerOutTemp: JSONObj.t7,
                    OilInjTemp: JSONObj.t8,



                    // Pressures -------------------------------
                    InterstagePressure: JSONObj.p1,
                    SumpPressure: JSONObj.p2,
                    DownholeAirPressure: JSONObj.p3,
                    RotationPressure: JSONObj.p4,
                    HoldbackPressure: JSONObj.p5,
                    PilotPressure: JSONObj.p6,
                    PulldownPressure: JSONObj.p7,
                    MainPumpPressure: JSONObj.p8,
                    FanPumpPressure: JSONObj.p9,
                    Pump3Pressure: JSONObj.pa,
                    Pump4Pressure: JSONObj.pb,
                    FMClampPressure: JSONObj.pc,
                    EngineOilPressure: JSONObj.pd,
                    DynasetPressure: JSONObj.pf,
                    CatPumpPressure: JSONObj.pg,
                    OilInjPressure: JSONObj.ph,
                    AuxAirPressure: JSONObj.pi,
                    CompUnloadPressure: JSONObj.pj,



                    // RPMs----------------------------------
                    EngineRpm: JSONObj.r1,
                    HeadRpm: JSONObj.r2,
                    CoolingFanRpm: JSONObj.r3,

                    // Levels ------------------------------
                    FuelTankLvl: JSONObj.l1,
                    WaterTankLvl: JSONObj.l2,
                    HydOilLvl: JSONObj.l3,

                    // Angles -------------------------------
                    DeckFrontPitch: JSONObj.a1,
                    DeckFrontRoll: JSONObj.a2,
                    DeckRearPitch: JSONObj.a3,
                    DeckRearRoll: JSONObj.a4,
                    FMAngle: JSONObj.a5,
                    MastAngle: JSONObj.a6,
                    CycPitch: JSONObj.a7,
                    CycRoll: JSONObj.a8,

                    // Setpoints ------------------------------
                    CatPumpSP: JSONObj.s1,
                    DynasetPumpSP: JSONObj.s2,
                    EngineRPMSP: JSONObj.s3,
                    RotationLimSP: JSONObj.s4,
                    HoldbackSP: JSONObj.s5,
                    PulldownSP: JSONObj.s6,
                    AirSP: JSONObj.s7,


                    //Misc -------------------------------------
                    HeadPosition: JSONObj.m1,
                    FMPosition: JSONObj.m2,
                    FuelUsed: JSONObj.m3,
                    EngineLoad: JSONObj.m4,
                    EngineVolts: JSONObj.m5,
                    EngineFuelRateLpM: JSONObj.m6,
                    EngineHours: JSONObj.m7,
                    CatPumpFlow: JSONObj.m8,
                    DynasetPumpFlow: JSONObj.m9,


                    //Packed Booleans --------------------------
                    CanStatusB1: JSONObj.b1,
                    CanStatusB2: JSONObj.b2,
                    CanStatusB3: JSONObj.b3,
                    BaseAnaError1: JSONObj.b4,
                    BaseAnaError2: JSONObj.b5,
                    BaseAnaError3: JSONObj.b6,
                    BaseDigInputs1: JSONObj.b7,
                    BaseDigInputs2: JSONObj.b8,
                    BaseDigInputs3: JSONObj.b9,
                    BaseFuncStatus1: JSONObj.ba,
                    BaseFuncStatus2: JSONObj.bb,
                    BaseDigOutputs1: JSONObj.bc,
                    BaseDigOutputs2: JSONObj.bd,
                    BaseDigOutputs3: JSONObj.be,

                    //BaseFuncStatus2:                JSONObj.bf,
                    //BaseDigOutputs1:                JSONObj.ba,
                    //BaseDigOutputs2:                JSONObj.b11,
                    //BaseDigOutputs3:                JSONObj.b12,

                    //BaseAnalytic1:   u16DatatoBools(JSONObj.b13),
                    //BaseAnalytic2:   u16DatatoBools(JSONObj.b14),




                    // Booleans ----------------------------------------------------------------------------

                    // Valve Banks
                    BVB1_OK: JSONObj.a,
                    BVB2_OK: JSONObj.a,
                    BVB3_OK: JSONObj.a,
                    BVB4_OK: JSONObj.a,
                    MVB1_OK: JSONObj.a,
                    MVB2_OK: JSONObj.a,

                    // Controls
                    JS1_OK: JSONObj.a,
                    JS2_OK: JSONObj.a,
                    JS3_OK: JSONObj.a,
                    KP1_OK: JSONObj.a,
                    KP2_OK: JSONObj.a,
                    RKP_OK: JSONObj.a,
                    NBB_OK: JSONObj.a,
                    CAN_OK: JSONObj.a,

                    // Inputs
                    CycSpClosedPrx: JSONObj.a,
                    MastHome: JSONObj.a,
                    CoolantlvlOk: JSONObj.a,
                    Pump1Prx: JSONObj.a,
                    Pump2Prx: JSONObj.a,
                    Pump3Prx: JSONObj.a,
                    Pump4Prx: JSONObj.a,
                    MastLockIn: JSONObj.a,
                    MastLockOut: JSONObj.a,
                    EstopOK: BaseAnalytic1[3 + 8],
                    FMRodPrx1: JSONObj.a,
                    FMRodPrx2: JSONObj.a,
                    FMSlewInPrx: JSONObj.a,
                    FMSlewOutPrx: JSONObj.a,
                    FMClampOpen: JSONObj.a,
                    FireSuppPrOK: BaseAnalytic1[4 + 8],

                    // HMI Mode
                    DrillMode: BaseAnalytic1[3],
                    RPMode: BaseAnalytic1[4],
                    WirelineMode: BaseAnalytic1[5],
                    SetupMode: BaseAnalytic1[6],

                    // Outputs
                    HornOn: JSONObj.a,
                    CatPumpOn: JSONObj.a,
                    DynasetOn: JSONObj.a,
                    HmOilOn: JSONObj.a,
                    FMClampClosed: JSONObj.a,
                    TopBORotOn: JSONObj.a,
                    BotBORotOn: JSONObj.a,
                    TopBOClampOn: JSONObj.a,
                    BotBOClampOn: JSONObj.a,
                    WlnWinchOn: JSONObj.a,
                    HeadTraverseActive: BaseAnalytic1[0],
                    HeadTraverseUp: BaseAnalytic2[2],
                    HeadTraverseDown: BaseAnalytic2[1],
                    SFActive: BaseAnalytic1[2],
                    SFUp: BaseAnalytic2[4],
                    SFDown: BaseAnalytic2[3],
                    HeadRotationActive: BaseAnalytic1[1],
                    HeadRotationLock: BaseAnalytic2[0],
                    HeadRotationFWD: BaseAnalytic2[6],
                    HeadRotationREV: BaseAnalytic2[5],
                    TSActive: JSONObj.a,
                    SlipsTActive: JSONObj.a,
                    FMTraverseActive: BaseAnalytic2[2 + 8],
                    FMTiltActive: BaseAnalytic2[3 + 8],
                    FMSlewActive: BaseAnalytic2[4 + 8],
                    FMClampClosedActive: BaseAnalytic2[6 + 8],
                    FMClampOpenActive: BaseAnalytic2[5 + 8],
                    TramFrontLeft: JSONObj.a,
                    TramFrontRight: JSONObj.a,
                    TramRearLeft: JSONObj.a,
                    TramRearRight: JSONObj.a,
                    TramHigh: JSONObj.a,
                    RadioCycActive: BaseAnalytic1[1 + 8],
                    RadioSetupActive: BaseAnalytic1[0 + 8],
                    RadioTrammingActive: BaseAnalytic1[2 + 8],
                    CompStartRun: JSONObj.a,
                    AirVent: JSONObj.a,
                    BoosterTaps: BaseAnalytic1[7 + 8],
                    AuxAirTap: JSONObj.a,
                    EnginePrimer: JSONObj.a,
                    EngineIgn: BaseAnalytic2[0],
                    StartCondOk: JSONObj.a,
                    BoosterRunning: BaseAnalytic1[5 + 8],
                    BoosterLoaded: BaseAnalytic1[6 + 8],
                    timestamp: JSONObj.a,
                    year: timeConverter(new Date()).year,
                    month: timeConverter(new Date()).month,
                    date: timeConverter(new Date()).date,
                    hour: timeConverter(new Date()).hour,
                    minute: timeConverter(new Date()).min,
                    second: timeConverter(new Date()).sec
<<<<<<< HEAD
                }).then((result) => {
                    if (result['0'] === 0) {
                        MKY03Live.create({
                            // Temperatures -----------------------------
                            RecvDischargeTemp: JSONObj.t1,
                            CompDischargeTemp: JSONObj.t2,
                            CoolantTemp: JSONObj.t3,
                            HydOilTemp: JSONObj.t4,
                            EngineOilTemp: JSONObj.t5,
                            CompCoolerInTemp: JSONObj.t6,
                            CompCoolerOutTemp: JSONObj.t7,
                            OilInjTemp: JSONObj.t8,



                            // Pressures -------------------------------
                            InterstagePressure: JSONObj.p1,
                            SumpPressure: JSONObj.p2,
                            DownholeAirPressure: JSONObj.p3,
                            RotationPressure: JSONObj.p4,
                            HoldbackPressure: JSONObj.p5,
                            PilotPressure: JSONObj.p6,
                            PulldownPressure: JSONObj.p7,
                            MainPumpPressure: JSONObj.p8,
                            FanPumpPressure: JSONObj.p9,
                            Pump3Pressure: JSONObj.pa,
                            Pump4Pressure: JSONObj.pb,
                            FMClampPressure: JSONObj.pc,
                            EngineOilPressure: JSONObj.pd,
                            DynasetPressure: JSONObj.pf,
                            CatPumpPressure: JSONObj.pg,
                            OilInjPressure: JSONObj.ph,
                            AuxAirPressure: JSONObj.pi,
                            CompUnloadPressure: JSONObj.pj,



                            // RPMs----------------------------------
                            EngineRpm: JSONObj.r1,
                            HeadRpm: JSONObj.r2,
                            CoolingFanRpm: JSONObj.r3,

                            // Levels ------------------------------
                            FuelTankLvl: JSONObj.l1,
                            WaterTankLvl: JSONObj.l2,
                            HydOilLvl: JSONObj.l3,

                            // Angles -------------------------------
                            DeckFrontPitch: JSONObj.a1,
                            DeckFrontRoll: JSONObj.a2,
                            DeckRearPitch: JSONObj.a3,
                            DeckRearRoll: JSONObj.a4,
                            FMAngle: JSONObj.a5,
                            MastAngle: JSONObj.a6,
                            CycPitch: JSONObj.a7,
                            CycRoll: JSONObj.a8,

                            // Setpoints ------------------------------
                            CatPumpSP: JSONObj.s1,
                            DynasetPumpSP: JSONObj.s2,
                            EngineRPMSP: JSONObj.s3,
                            RotationLimSP: JSONObj.s4,
                            HoldbackSP: JSONObj.s5,
                            PulldownSP: JSONObj.s6,
                            AirSP: JSONObj.s7,


                            //Misc -------------------------------------
                            HeadPosition: JSONObj.m1,
                            FMPosition: JSONObj.m2,
                            FuelUsed: JSONObj.m3,
                            EngineLoad: JSONObj.m4,
                            EngineVolts: JSONObj.m5,
                            EngineFuelRateLpM: JSONObj.m6,
                            EngineHours: JSONObj.m7,
                            CatPumpFlow: JSONObj.m8,
                            DynasetPumpFlow: JSONObj.m9,


                            //Packed Booleans --------------------------
                            CanStatusB1: JSONObj.b1,
                            CanStatusB2: JSONObj.b2,
                            CanStatusB3: JSONObj.b3,
                            BaseAnaError1: JSONObj.b4,
                            BaseAnaError2: JSONObj.b5,
                            BaseAnaError3: JSONObj.b6,
                            BaseDigInputs1: JSONObj.b7,
                            BaseDigInputs2: JSONObj.b8,
                            BaseDigInputs3: JSONObj.b9,
                            BaseFuncStatus1: JSONObj.ba,
                            BaseFuncStatus2: JSONObj.bb,
                            BaseDigOutputs1: JSONObj.bc,
                            BaseDigOutputs2: JSONObj.bd,
                            BaseDigOutputs3: JSONObj.be,

                            //BaseFuncStatus2:                JSONObj.bf,
                            //BaseDigOutputs1:                JSONObj.ba,
                            //BaseDigOutputs2:                JSONObj.b11,
                            //BaseDigOutputs3:                JSONObj.b12,

                            //BaseAnalytic1:   u16DatatoBools(JSONObj.b13),
                            //BaseAnalytic2:   u16DatatoBools(JSONObj.b14),




                            // Booleans ----------------------------------------------------------------------------

                            // Valve Banks
                            BVB1_OK: JSONObj.a,
                            BVB2_OK: JSONObj.a,
                            BVB3_OK: JSONObj.a,
                            BVB4_OK: JSONObj.a,
                            MVB1_OK: JSONObj.a,
                            MVB2_OK: JSONObj.a,

                            // Controls
                            JS1_OK: JSONObj.a,
                            JS2_OK: JSONObj.a,
                            JS3_OK: JSONObj.a,
                            KP1_OK: JSONObj.a,
                            KP2_OK: JSONObj.a,
                            RKP_OK: JSONObj.a,
                            NBB_OK: JSONObj.a,
                            CAN_OK: JSONObj.a,

                            // Inputs
                            CycSpClosedPrx: JSONObj.a,
                            MastHome: JSONObj.a,
                            CoolantlvlOk: JSONObj.a,
                            Pump1Prx: JSONObj.a,
                            Pump2Prx: JSONObj.a,
                            Pump3Prx: JSONObj.a,
                            Pump4Prx: JSONObj.a,
                            MastLockIn: JSONObj.a,
                            MastLockOut: JSONObj.a,
                            EstopOK: BaseAnalytic1[3 + 8],
                            FMRodPrx1: JSONObj.a,
                            FMRodPrx2: JSONObj.a,
                            FMSlewInPrx: JSONObj.a,
                            FMSlewOutPrx: JSONObj.a,
                            FMClampOpen: JSONObj.a,
                            FireSuppPrOK: BaseAnalytic1[4 + 8],

                            // HMI Mode
                            DrillMode: BaseAnalytic1[3],
                            RPMode: BaseAnalytic1[4],
                            WirelineMode: BaseAnalytic1[5],
                            SetupMode: BaseAnalytic1[6],

                            // Outputs
                            HornOn: JSONObj.a,
                            CatPumpOn: JSONObj.a,
                            DynasetOn: JSONObj.a,
                            HmOilOn: JSONObj.a,
                            FMClampClosed: JSONObj.a,
                            TopBORotOn: JSONObj.a,
                            BotBORotOn: JSONObj.a,
                            TopBOClampOn: JSONObj.a,
                            BotBOClampOn: JSONObj.a,
                            WlnWinchOn: JSONObj.a,
                            HeadTraverseActive: BaseAnalytic1[0],
                            HeadTraverseUp: BaseAnalytic2[2],
                            HeadTraverseDown: BaseAnalytic2[1],
                            SFActive: BaseAnalytic1[2],
                            SFUp: BaseAnalytic2[4],
                            SFDown: BaseAnalytic2[3],
                            HeadRotationActive: BaseAnalytic1[1],
                            HeadRotationLock: BaseAnalytic2[0],
                            HeadRotationFWD: BaseAnalytic2[6],
                            HeadRotationREV: BaseAnalytic2[5],
                            TSActive: JSONObj.a,
                            SlipsTActive: JSONObj.a,
                            FMTraverseActive: BaseAnalytic2[2 + 8],
                            FMTiltActive: BaseAnalytic2[3 + 8],
                            FMSlewActive: BaseAnalytic2[4 + 8],
                            FMClampClosedActive: BaseAnalytic2[6 + 8],
                            FMClampOpenActive: BaseAnalytic2[5 + 8],
                            TramFrontLeft: JSONObj.a,
                            TramFrontRight: JSONObj.a,
                            TramRearLeft: JSONObj.a,
                            TramRearRight: JSONObj.a,
                            TramHigh: JSONObj.a,
                            RadioCycActive: BaseAnalytic1[1 + 8],
                            RadioSetupActive: BaseAnalytic1[0 + 8],
                            RadioTrammingActive: BaseAnalytic1[2 + 8],
                            CompStartRun: JSONObj.a,
                            AirVent: JSONObj.a,
                            BoosterTaps: BaseAnalytic1[7 + 8],
                            AuxAirTap: JSONObj.a,
                            EnginePrimer: JSONObj.a,
                            EngineIgn: BaseAnalytic2[0],
                            StartCondOk: JSONObj.a,
                            BoosterRunning: BaseAnalytic1[5 + 8],
                            BoosterLoaded: BaseAnalytic1[6 + 8],
                            timestamp: JSONObj.a,
                            year: timeConverter(new Date()).year,
                            month: timeConverter(new Date()).month,
                            date: timeConverter(new Date()).date,
                            hour: timeConverter(new Date()).hour,
                            minute: timeConverter(new Date()).min,
                            second: timeConverter(new Date()).sec
                        })
                            .then(console.log('Entry Added'))
                    }

=======
                },
                {where: {
                    _id: 1
                }}).then(() => {
                    console.log('Rig03 Entry Added');
                    //console.log(BaseAnalytic1[3 + 8]);
                    console.log(JSONObj.pj);
                    //console.log(EngineFuelRateLpH);
>>>>>>> c117bb5564583bdd779ff8a8df2c96cb24dec322

                })

                // If MQTT Message is not valid JSON, we log the error to the console.
            } catch (e) {
                console.log(e)
            }
        }
    }
}