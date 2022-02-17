import Sequelize from "sequelize";
import config from '../config/config.json';
// Defining MKY0811 Model

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  // logging: false
});

console.log(config.username, "username")

const DataTypes = Sequelize.DataTypes;
const literal = Sequelize.literal;

const MKY08 = sequelize.define("MKY03", {

  time: {
    type: DataTypes.BIGINT,
    allowNull: true
  },

  RecvDischargeTemp: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },

  CompDischargeTemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CoolantTemp: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },

  HydOilTemp: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },

  EngineOilTemp: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },

  InterstagePressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  SumpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DownholeAirPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  RotationPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  HoldbackPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  PilotPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  PulldownPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  MainPumpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FanPumpPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  Pump3Pressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  Pump4Pressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FMClampPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  EngineOilPressure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  EngineRpm: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  HeadRpm: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CoolingFanRpm: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FuelTankLvl: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  WaterTankLvl: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DeckFrontPitch: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DeckFrontRoll: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DeckRearPitch: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DeckRearRoll: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FMAngle: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  MastAngle: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CycPitch: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CycRoll: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CatPumpSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DynasetPumpSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  EngineRPMSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  RotationLimSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  HoldbackSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  PulldownSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  AirSP: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  HeadPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FMPosition: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  FuelUsed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  EngineLoad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  EngineHours: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  CatPumpFlow: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  DynasetPumpFlow: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  // BOOLEANS --------------------------------------------------------------------
  BVB1_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BVB2_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BVB3_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BVB4_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  MVB1_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  MVB2_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  JS1_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  JS2_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  
  JS3_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  KP1_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  KP2_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  RKP_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  NBB_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  CAN_OK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  CycSpClosedPrx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  MastHome: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  CoolantlvlOk: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  Pump1Prx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  Pump2Prx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  Pump3Prx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  Pump4Prx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  MastLockIn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  MastLockOut: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  // Look at 5 E-stops and Negate value if one is False
  EstopOK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMRodPrx1: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMRodPrx2: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMSlewInPrx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMSlewOutPrx: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMClampOpen: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FireSuppPrOK: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  DrillMode: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  RPMode: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  WirelineMode: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  SetupMode: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  HornOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  CatPumpOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  DynasetOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  HmOilOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMClampClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TopBORotOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BotBORotOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TopBOClampOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BotBOClampOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  WlnWinchOn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  HeadTraverseActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  SFActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  HeadRotationActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TSActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  SlipsTActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMTraverseActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMTiltActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMSlewActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMClampClosedActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  FMClampOpenActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TramFrontLeft: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TramFrontRight: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TramRearLeft: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TramRearRight: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  TramHigh: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  RadioCycActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  RadioSetupActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  RadioTrammingActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  CompStartRun: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  AirVent: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  BoosterTaps: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  AuxAirTap: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  EnginePrimer: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  EngineIgn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },

  StartCondOk: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },


  BoosterRunning: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },


  BoosterLoaded: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },


// Packed Boolean Data --------------------------------------------------------------

// Base PLC
CanStatusB1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

CanStatusB2: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

CanStatusB3: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseAnaError1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseAnaError2: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseAnaError3: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigInputs1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigInputs2: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigInputs3: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseFuncStatus1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseFuncStatus2: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigOutputs1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigOutputs2: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

BaseDigOutputs3: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

// Mast Packed Booleans --------------------------
CanStatusM1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

MastAnaError1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

MastDigInputs1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},

MastDigOutputs1: {
  type: DataTypes.INTEGER,
  allowNull: true,
},



  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },

  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  month: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  date: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  hour: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  minute: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  second: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

},
  {
    timestamps: false
  }
);

export default MKY08;