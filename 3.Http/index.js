// Creating our first server using HTTP
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

    if(request.url==='/')
    {
        response.end("Hello")
    }
    else if(request.url=='/note')
    {
        fs.readFile('./README.md', "utf-8", (err,data)=>
        {
            response.end(data)

        })
    }

});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

// server.listen(6000)