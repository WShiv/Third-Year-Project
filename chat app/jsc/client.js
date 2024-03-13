const socket = io('http://localhost:8000');

const form = document.getElementById('Send-contsiner');
const messageInput = document.getElementById('messageInp')
const messgeContainer = document.querySelector(".container")

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message')
    messageElement.classList.add(position);
    messgeContainer.append(messageElement);
}

const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined', name =>{
    append('${name} joined the chat')
})

socket.on('receive', data =>{
    append('${data.message}: ${data.user}', 'left')
})