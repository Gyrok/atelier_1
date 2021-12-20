module.exports =  class gamemanager {
    constructor(hostId, roomId) {
        this.hostId = hostId;
        this.roomId = roomId;
        this.playerId = 0;
        this.full = false;

        io.to(this.hostId).emit('NiceCrea');
    }

    setPlayer(playerId) {
        if (this.full == false) {
            this.playerId = playerId;
            io.to(playerId).emit('NiceCo');
        }
        io.to(playerId).emit('RoomFull');
    }
}
