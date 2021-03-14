const http = require("http");
const routes = require("./routes");

const host = 'localhost';
const port = 8080;

const server = http.createServer(routes.requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});