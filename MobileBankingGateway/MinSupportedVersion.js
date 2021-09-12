/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
//var http = require('http');
var minAndroidVersion = "1.0.0"
var minIOSVersion = "2.1.0"

exports.minVersion = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "Android": minAndroidVersion, "iOS": minIOSVersion}));
    res.status(200);
};

exports.minVersionWithScheduledMessage = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "Android": minAndroidVersion, "iOS": minIOSVersion, "scheduledMessage": "Our service will be down this Friday from 8pm AEST to 10pm" }));
    res.status(200);
};

exports.minVersionWithOutageMessage = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "Android": minAndroidVersion, "iOS": minIOSVersion,  "outageMessage": "We are out of action until 10pm AEST, please try again later" }));
    res.status(200);
};
