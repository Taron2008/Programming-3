var fs = require('fs');
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("gameOfLife"));

app.get("/", function (req, res) {
   res.redirect("index.html");
   
});


io.on("connection", function(socket){
   socket.on("send stat", function(data){
      fs.writeFile("statistics.json", JSON.stringify(data))
      var stat = JSON.parse(JSON.stringify(data))
      socket.emit("send json", stat)
   })
})


server.listen(3000, function () {
   console.log("Example is running on port 3000");
});











