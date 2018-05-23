var socket = io();

function sendBoardData(data){
  console.log(data);
  socket.emit('updateBoard', data);
}

function pickOpponent(id){
  socket.emit('updateOpponent', id);
}

socket.on('newBoard', function(pack){
  updateClient(pack);
});

socket.on('socketID', function(id){
  document.getElementById("clientID").innerHTML = "Client ID: " + id;
});
