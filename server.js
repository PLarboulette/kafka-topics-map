const http = require("http");
const routes = require("./graph/routes");

const host = '0.0.0.0';
const port = 8080;

const server = http.createServer(routes.requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});