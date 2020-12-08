import Sequelize from "sequelize";
// Defining MKY0811 Model

// Configuring Sequelize
const config = {
  username: "fqjl2vn3juy57dg3",
  password: "swrilguc2fanqlum",
  database: "ofmtuee15e4rdq5f",
  host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql"
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql"
});


const MKY811 = sequelize.define("MKY811", {

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

  plcAlarm: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true
  },

  engineRpm: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true
  },

  oilPressure: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  engineHours: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },

  fuelRate: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  coolantTemp: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  dischargeTemp1: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  dischargeTemp2: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  dischargeTemp3: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  dischargeTemp4: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  dischargePressure: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  suctionTemp: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  suctionPressure: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
  },

  load: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: true,
  },

  engineLoad: {
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

export default MKY811;