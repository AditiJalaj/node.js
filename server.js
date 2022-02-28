const http = require('http');
const fs = require('fs');

//creating a server instance which has callback as arg that runs everytime a request comes in
const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method);

  /*
  //to send response to the browser - following 3 steps
  //1 setting the Response header
  res.setHeader('Content-Type', 'text/html');

  //2 write to the browser
  res.write('<h1>Hello Aditi <h2>');

  //3 ending the content
  res.end();
  */

  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end(); //don't want the page hanging if there's an error
    } else {
      res.write(data);
      res.end();
    }
  });
});

//3rd arg cb fires when we are listening for requests
server.listen(5000, 'localhost', () => {
  console.log('listening for requests on port 5000');
});
