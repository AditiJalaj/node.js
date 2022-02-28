const http = require('http');

//creating a server instance which has callback as arg that runs everytime a request comes in
const server = http.createServer((req, res) => {
  console.log('request made');
});

//3rd arg cb fires when we are listening for requests
server.listen(5000, 'localhost', () => {
  console.log('listening for requests on port 5000');
});
