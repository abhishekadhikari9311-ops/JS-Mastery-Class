const http = require("http");
const PORT = 3000;
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>hello i am abhishek adhikari,, how are you dude</h1>");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
  });
