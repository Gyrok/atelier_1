var io;
var gameSocket;

/*
Function called by server to initialize a new game master
*/
exports.initgame = function(sio, socket) {
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', {message : 'You are connected'});

    //Host event
    gameSocket.on('HostCreateNewGame', hostCreateNewGame);
    gameSocket.on('HostRoomFull', hostPrepareGame);

    //Player event
    gameSocket.on('PlayerJoinGame', playerJoinGame);

    // ------------------ Host functions

    function hostCreateNewGame() {
        var thisGameId = (Math.random()*10000 | 0);
        
        this.emit('NewGameCreated', {gameId : thisGameId, mySocketId : this.id})

        this.join(thisGameId.toString());
    }

    function hostPrepareGame(gameId) {
        var sock = this;
        var data = {
            mySocketId : sock.id,
            gameId : gameId
        };
        //console.log("All Players Present. Preparing game...");
        io.sockets.in(data.gameId).emit('beginNewGame', data);
    }

    // ------------------ Player functions

    function playerJoinGame(data) {
        console.log('Player ' + data.playerName + 'attempting to join game: ' + data.gameId );
    
        // A reference to the player's Socket.IO socket object
        var sock = this;
    
        // Look up the room ID in the Socket.IO manager object.
        var room = gameSocket.manager.rooms["/" + data.gameId];
    
        // If the room exists...
        if( room != undefined ){
            // attach the socket id to the data object.
            data.mySocketId = sock.id;
    
            // Join the room
            sock.join(data.gameId);
    
            //console.log('Player ' + data.playerName + ' joining game: ' + data.gameId );
    
            // Emit an event notifying the clients that the player has joined the room.
            io.sockets.in(data.gameId).emit('playerJoinedRoom', data);
    
        } else {
            // Otherwise, send an error message back to the player.
            this.emit('error',{message: "This room does not exist."} );
        }
    }


}