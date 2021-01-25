const socket = io("http://localhost:3001");
const messageContainer = document.querySelector("#message-container");
const messageForm = document.querySelector("#send-container");
const messageInput = document.querySelector("#message-input");

const name = prompt('Please provide a username for dog-chat');
appendMessage(`You joined as '${name}'`)
socket.emit('new-user', name);

socket.on("chat-message", (data) => {
  appendMessage(`${data.name} : ${data.message}`);
});

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

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

function appendMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
