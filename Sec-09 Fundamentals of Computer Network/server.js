const http = require("http");

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  // Send response
  res.end('{ "message" : "Hello from Node.js server!"}');
});

// Start server
server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
