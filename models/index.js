import MKY021 from "./mky021.js";
import MKY08 from "./mky008.js";
import MKY03 from "./mky003.js";
import MKY03Live from "./mky003Live.js";

// Defining MKY0811 Model

const db = {};

db.MKY021 = MKY021;
db.MKY08 = MKY08;
db.MKY03 = MKY03;
db.MKY03Live = MKY03Live;

export default db;