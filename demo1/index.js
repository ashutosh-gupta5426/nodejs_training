const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: Request Received.`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/create":
        res.end("A new user created");
        break;
      case "/update":
        res.end("The user details are updated.");
        break;
      case "/getUser":
        res.end("Name: User1\n Age: 18");
        break;
      case "/deleteUser":
        res.end("User Deleted");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(3000, () => console.log("Server is running on PORT: 3000"));
