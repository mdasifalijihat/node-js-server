import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./intex";
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running.......");

    // root route
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "hello from node js with typescript",
          path: req.url,
        })
      );
    }

    // status route
    if (req.url === "/api" && req.method == "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "health status okay ",
          path: req.url,
        })
      );
    }

    // post route

    if (req.url === "/api/users" && req.method == "POST") {
      // const user = {
      //         id: 1,
      //         name: "Asif",
      //         email: "asifali@gmail.com"
      // }
      // res.writeHead(200, {"content-type" : "application/json"});
      // res.end(JSON.stringify(user))

      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parseBody = JSON.parse(body);
          console.log(parseBody);
          res.end(JSON.stringify(parseBody));
          console.log("chating logi current changes");
        } catch (err: any) {
          console.log(err?.message);
        }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
