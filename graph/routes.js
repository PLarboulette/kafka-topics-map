const services = require("./services"); 
const fs = require('fs').promises;

const requestListener = function  (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

    switch (req.url) {
        case '/data' :
            res.setHeader("Content-Type", "application/json");
            services.getData(res);
            break;
        case "/": 
            fs.readFile(__dirname + "/index.html")
            .then(contents => {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
            });
            break;
    } 
};

module.exports = {
    requestListener: requestListener
}