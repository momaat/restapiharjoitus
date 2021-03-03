/*const http = require("http");

// Create a server (http.Server) and provide 
const server = http.createServer((request, response) => {
    response.end("Path: " + request.url);
});

//Start the server in port 8080
server.listen(8080, () =>
    console.log(`Server listening in port ${server.address().port}`)
);*/

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

let customers = [
    {id: 1, name: "Ada"},
    {id: 2, name: "Bea"},
    {id: 3, name: "Casper"}
]



//HTTP GET http://localhost:8080/api/customers
app.get("/api/customers", (req, res) => {
    res.send(customers);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})