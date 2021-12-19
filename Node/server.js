// ------------------ Imports

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(server)
const path = require('path')

const axios = require('axios');

var serialize = require('serialize-javascript');

const http = require('http');
const { Console } = require('console')

app.use(express.static(path.join(__dirname + '/public')))

var sessionMap = {};
var i = 0;
var ListManagers = [];
var NewRoomId = 0;



function addSessionMap(id, data) {
  sessionMap[id].push(data)
  io.emit('updateSessionMap', sessionMap)
}

// function rmvSessionMap(id) {io.emit('updateSessionMap', sessionmap)}

// ------------------ Connection basis
io.on('connection', socket => {

    socket.on("establishConnection", (Id) => {
      sessionMap[Id]=[socket.id];
      console.log(sessionMap)
      getUser(Id)
    });

    /*
    socket.on('disconnect', () => {
      rmvSessionMap(id)
    })
    */

    // ------------------ receiving a msg

    socket.on('helloThere', (message) => {
      const receiverId = sessionMap[message.receiverId]
      const senderId = sessionMap[message.senderId];
      const messageData = message.content;
      generalKenobi(receiverId, messageData);
      generalKenobi(senderId, messageData);
      saveMsg(message);
    });

// ------------------ game managers

    socket.on("getCards", (id)=>getCards(id))
/*
create an array of game managers
create code like an api beetween servers and gamemanagers, epxl : on('managerDoSmth', ListManagers[i].dostuff(... params))
*/

    socket.on('createRoom', (hostId) => {
      var GM = new gamemanager(hostId, NewRoomId);
      ListManagers.push(GM);
      NewRoomId += 1;
    });

    socket.on('joinRoom', (data) => {
      for (i of ListManagers) {
        if (i.roomId == data.room) {
          i.setPlayer(data.id);
        }
      }
    });

// ------------------ update l'utilisateur après le match

    socket.on('updateUser',  (id, val) => {

      for (i in sessionMap) {
        session = sessionMap[i][1]
        if (i == id) {
          var uDTO = new userDTO(session.id, session.login, session.pwd, session.account+val, session.lastName, session.surName, session.email, session.cardList);
          newUDto = JSON.stringify(uDTO);
          var uShell = new UserShell('UPDATE', uDTO);
          console.log(`we have uShell : ${JSON.stringify(uShell)}`)
        }
      }

      const headers = {
        'destination': '/topic/User_Bus_Custom'
      };
      


      stompit.connect(connectOptions, (error, client) => {
        if (error) {
          return console.error(error);
        }
        const frame = client.send(headers);
        frame.write(`id:${id},val:${val}`); // updateUser avec UserShell pour les résultats
        frame.end();
        client.disconnect();

        // créer nouveau channel d'ecoute sur spring avec simplement id + valeur à modif
      });
    })
  }); 



// ------------------ receiving a msg
function generalKenobi (receiver, data) {
  io.to(receiver).emit('generalKenobi', data);
}


server.listen(3000);
console.log(`Server started on port : ${port}`)


// ------------------ Saving msgs

function saveMsg(data) {

  axios.post('http://localhost:8082/msgs', data) 
    .then(res=>{
      console.log(`Status:${res.status}`);
      console.log(`Body : ${res.data}`);
    }).catch((err)=>{
      console.error(err); 
    })
}


/* Old
function saveMsg(data) {
  var options = {
    hostname: 'localhost',
    port: '8082',
    path: '/msgs?receiverId='+data.receiverId+'&senderId='+data.senderId+'&content='+data.content,
    method: 'POST',
  }
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.setEncoding('utf-8')
  })
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
}
*/

// ------------------ Getting one user

function getUser(id) {
  var options = {
    hostname: 'localhost',
    port: '8082',
    path: '/user/'+id,
    method: 'GET',
  }
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.setEncoding('utf-8')
    
    res.on('data', d => {
      addSessionMap(id, JSON.parse(d))
    })
  })
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
}

// ------------------ Getting all cards of one user
function getCards(id) {
  for (i in sessionMap) {
    session = sessionMap[i]
    if (i == id) {
      for (card of session[1].cardList) {
        getCard(id, card)
      }
    }
  }
}
// ------------------ Getting one card

function getCard(id, cardId) {
  var options = {
    hostname: 'localhost',
    port: '8082',
    path: '/card/'+cardId,
    method: 'GET',
  }
  const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.setEncoding('utf-8')
    
    res.on('data', d => {
      io.to(sessionMap[id]).emit('addCard', JSON.parse(d))
    })
  })
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()
}

// ------------------ Mastodont game manager

class gamemanager {
  constructor(hostId, roomId) {
      this.hostId = hostId;
      this.socketHost = sessionMap[this.hostId]
      this.roomId = roomId;
      this.playerId = 0;
      this.full = false;

      io.to(this.socketHost).emit('NiceCrea');
  }

  setPlayer(playerId) {
      if (this.full == false) {
          this.playerId = playerId;
          this.socketPlayer = sessionMap[this.playerId]
          io.to(this.socketPlayer).emit('NiceCo');
          this.full=true;
      }
      else {
        io.to(sessionMap[playerId]).emit('RoomFull');
      }
    }

  tryStart() {
    if (this.full == true) {
      this.start()
    }
  }

  start() {
    var starter = Math.random();
    if (starter>0.5) {
      this.currentPlayer = 'host';
    }
    else {
      this.currentPlayer = 'player';
    }
    //AP : Action Point
    this.playerAP = 10;
    this.hostAP = 10
  }

  tryattack(card1, card2) {
    if (this.currentPlayer== 'Host') {
      var AP = this.hostAP
    }
    else {
      var AP = this.playerAP
    }
    if (card1.cost<=AP) {
      this.attack(card1, card2)
    }
  }

  attack(card1, card2) {

    if (this.currentPlayer == 'Host') {
      this.hostAP -= card1.cost;
    }
    if (this.currentPlayer == 'Player') {
      this.playerAP -= card1.cost;
    }

    if (card2.HP>card1.atk) {
      card2.HP -= card1.atk;
    }
    else {
      this.playerCards = this.playerCards.pop(card2)
      this.isOver()
    }
    this.nextTurn()
  }

  nextTurn() {
    if (this.currentPlayer == 'Host') {
      if (this.hostAP == 0) {
        this.currentPlayer = 'Player'
        this.playerAP = 10;
      }
    }
    if (this.currentPlayer == 'Player') {
      if (this.playerAP == 0) {
        this.currentPlayer = 'Host'
        this.hostAP = 10;
      }
    }
  }

  isOver() {
    if (this.playerCards.length == 0) {
      socket.to(this.socketHost).emit('victory', loot)
      socket.to(this.socketPlayer).emit('lose', loot)
    }
    if (this.hostCards.length == 0) {
      socket.to(this.socketHost).emit('lose', loot)
      socket.to(this.socketPlayer).emit('victory', loot)
    }
  }
}

// ------------------ UserShell pour communiquer avec Springboot

class userDTO {
  constructor(id, login, pwd, account, lastName, surName, email, cardList) {
    this.id = id;
    this.login = login;
    this.pwd = pwd;
    this.account = account;
    this.lastName = lastName;
    this.surName = surName;
    this.email = email;
    this.cardList = cardList
  }

}

class UserShell {
  constructor (func, user) {
    this.func = func;
    this.user = user;
  }
}
// ------------------ Communication via la queue

const stompit = require('stompit');

const connectOptions = {
  'host': 'localhost',
  'port': 61613
};

