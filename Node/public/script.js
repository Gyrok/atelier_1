// Class declaration
class message {
    constructor(senderId, receiverId, content) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.content = content;
    }
  }

// ------------------ Establishing connection

const socket = io();

function establishCo() {
    var myId = document.getElementById('myId').value

    socket.emit('establishConnection', myId);
}



// ------------------ Sending a message
function send() {
    var myId = document.getElementById('myId').value
    var content = document.getElementById('text').value;
    var receiverId = document.getElementById('receiverList').value; // make sure to read the value (id) and not what's printed (login)
    console.log(`receiver is ${receiverId}`)
    var newMsg = new message(myId, receiverId, content);

    socket.emit('helloThere', newMsg);

    document.getElementById('text').value=""
}

// ------------------ Receiving a message
socket.on('generalKenobi', (message) => {
    console.log(`a msg is being received`);
    feedMessage(message);
})

function feedMessage(message) {
    var paragraph = document.getElementById("messages");
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message

    paragraph.appendChild(div);
    console.log(message)
}

// ------------------ Getting the users
socket.on('updateSessionMap', (sessionMap) => {
    console.log(sessionMap)
    updateOption(sessionMap)
})

function updateOption(sessionMap) {
    var list = document.getElementById('receiverList')

    var child = list.lastElementChild; 
        while (child) {
            list.removeChild(child);
            child = list.lastElementChild;
        }
    for (var m in sessionMap) {
        var val = sessionMap[m][1]
        console.log(`this should be added to receiver : login : ${val.login} id :${val.id}`)
        let newopt = new Option(val.login, val.id)
        list.add(newopt)
    }
}

// ------------------ Game management

function createGame() {
    console.log('creating a room')
    var myId = document.getElementById('myId').value;
    socket.emit('createRoom', myId);
}

socket.on('NiceCrea', () => {
    console.log('room created');
    getCards();
});

function joinGame() {
    console.log('joining a room')
    var myId = document.getElementById('myId').value;
    var roomId = document.getElementById('roomId').value;
    console.log(`joining room ${roomId}`)

    socket.emit('joinRoom', ({id : myId, room : roomId}))
}
socket.on('NiceCo', () => {
    console.log("you're connected boi");
    getCards();
});

socket.on('RoomFull', () => console.log("no places no more"))

function getCards () {
    var myId = document.getElementById('myId').value;
    socket.emit('getCards', myId)
}

socket.on('addCard', (data) => {
    addCard(data)
});

function addCard(data) {
}

// ------------------ update user

function updateUser() {
    var myId = document.getElementById('myId').value
    socket.emit('updateUser', myId, 500)
}