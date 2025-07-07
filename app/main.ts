import * as net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this to pass the first stage
const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log("Recieved request: \n", data.toString());

    const CRLF = "\r\n";
    let response = "HTTP/1.1 200 OK" + CRLF + CRLF;
    socket.write(response);
  });

  socket.on("close", () => {
    socket.end();
  });
});

server.listen(4221, () => {
  console.log("opened server on : ", "localhost", server.address());
});
