import express from 'express';
import multer from 'multer';
import csv from 'fast-csv';
import crypto from 'crypto';
import path from 'path';
import mongoose from 'mongoose';
import moment from 'moment';

const app = express();
const PORT = 4000;

const Schema = mongoose.Schema;

let eventSchma = new Schema({
    value: Number,
    time: Date
})

let obdStatSchema = new Schema({
    PID: Number,
    name: String,
    events: [Event]
})

let driveSchema = new Schema({
    stats: [ObdStat],
    date: Date,
    fileName: String
})

let Event = mongoose.model('Event', eventSchema);
let ObdStat = mongoose.model('ObdStat', obdStatSchema);
let Drive = mongoose.model('Drive', driveSchema);


// mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function () {
//     console.log("MongoDB database connection established successfully");
// });


let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../tmp'))
        },
        filename: (req, file, cb) => {

            let randHex = crypto.randomBytes(16).toString('hex')

            cb(null, randHex + path.extname(file.originalname))
        }
    })
})

app.post('/upload', upload.single('driveLog'), function (req, res) {
    let rows = [];

    csv.fromPath(req.file.path).on('data', (data) => {
        rows.push(data);
    });

    let splitData = rows.map(v => v.split(','));

    let newDrive = new Drive({ stats: [], date = moment(splitData[1][0], "YYYY-MM-DD HH:mm:ss"), fileName = req.file.path });

    for (let i = 1; i < splitData[0].length; i++) {
        let newStat = new ObdStat({ PID: 0, name: splitData[0][i], events: [] });

        for (let j = 1; j < splitData.length; j++) {
            let newEvent = Event({ value: splitData[j][i], time: moment(splitData[j][i], "YYYY-MM-DD HH:mm:ss") });
            newStat.events.push(newEvent);
        }

        newDrive.stats.push(newStat);
    }

    newDrive.save(err => console.log(err));
});



app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
