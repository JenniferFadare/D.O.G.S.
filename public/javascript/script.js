const socket = io("http://localhost:3001");
const messageContainer = document.querySelector("#message-container");
const messageForm = document.querySelector("#send-container");
const messageInput = document.querySelector("#message-input");

const name = prompt('Please provide a username for dog-chat');
appendMessage(`You joined as '${name}'`)

socket.on("chat-message", (data) => {
  appendMessage(data);
});

// create event listener for chat submission
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the value of the message field
  const message = messageInput.value;
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
