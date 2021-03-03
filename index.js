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

// http://localhost:8080/index.html
app.use(express.static("public"));

let locations = [
    {id: 1, latitude: 60, longitude: 70},
    {id: 2, latitude: 40, longitude: 80}
];


//HTTP GET http://localhost:8080/api/locations
app.get("/api/locations", (req, res) => {
    //pretty printin 
    var str = JSON.stringify(locations, null, 2);
  //  res.type("application/json");
    res.send(str);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})