const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ObdStat = Schema({
    obd_protocol_code: {
        type: Number
    },
    obd_readable_name: {
        type: String
    },
    data_log: {
        type: ObjectId
    },
});


module.exports = mongoose.model('ObdStat', ObdStat);
