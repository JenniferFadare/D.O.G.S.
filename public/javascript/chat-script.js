// connect to the project, will need to be updated to 
const socket = io(`${document.location}`);
// grab DOM elements for chat
const messageContainer = document.querySelector("#message-container");
const messageForm = document.querySelector("#send-container");
const messageInput = document.querySelector("#message-input");

// create username // this will eventually be a fetch GET request to the db for the username oh dashbaord page. 
const name = prompt('Please provide a username for dog-chat');

// helper function to add a message into the chat box
function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}

// send message to user when they log in showing their username in dog chat
appendMessage(`You joined as '${name}'`)
socket.emit('new-user', name);

// set up chat message for socket send object as 'username: message'
socket.on("chat-message", (data) => {
  appendMessage(`${data.name} : ${data.message}`);
});

// set up user connected message displaying username of new connection to all other memebers
socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

// set up user disconnected message displaying username of new diconnect to all other users
socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

// create event listener for chat submission
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the value of the message field
  const message = messageInput.value;
  // display message on the senders screen
  appendMessage(`you: ${message}`)
  // send the message data to the socket.io server
  socket.emit("send-chat-message", message);
  // reset the message box after you send the message
  messageInput.value = "";
});
