var express = require('express');
var app = express();
var serv = require('http').Server(app);

//set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

//routes
app.get("/", function(req, res) {
  res.render("index");
})

serv.listen(port, function() {
  console.log("app running");
})

var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
  console.log('socket connection');

});
