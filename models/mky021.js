import Sequelize from "sequelize";
// Defining MKY0811 Model

// Configuring Sequelize
const config = {
  username: "fqjl2vn3juy57dg3",
  password: "swrilguc2fanqlum",
  database: "ofmtuee15e4rdq5f",
  host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  logging: false
});


const MKY021 = sequelize.define("MKY021", {

  clientID: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true
  },

  topic: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true
  },

  time: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
  },

  engineRPM: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true
  },

  oilPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true
  },

  engineHours: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  coolantTemp: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  headPosition: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  holeDepth: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  rotationRpm: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  penetrationRate: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  mastAngle: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  deckRoll: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  deckPitch: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  headRackBackProxyStatus: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  footClampPressureSwitch: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  coolantLevelSensor: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  rotationReversePressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  rotationForwardPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  holdBackPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  pulldownPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  waterPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  mainPumpPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  winchDownPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  winchUpPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }

},
{
  timestamps: false
}
);

export default MKY021;