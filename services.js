const data = require("./data.json");

function getData (res, headers) {
    res.writeHead(200);
    res.write(JSON.stringify(data));
    res.end();
}

module.exports = {
    getData: getData
}