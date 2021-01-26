const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const path = require("path");
// do some funky stuff with the express server
// to allow socket.io to listen on the same route as the server
const server = require("http").createServer(app);
// allow socket.io to listen on the server
const io = require("socket.io")(server);
// declare users vairable for chat.
const users = {};

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// create socket.io server
io.on("connection", (socket) => {
  // send mesage telling other users that someone connected
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });
  // send welcome message once someone connects
  socket.emit("chat-message", {
    name: "admin",
    message: "Welcome to dog chat!",
  });
  // set up chat message sender brodcasts an object with message and name keys. 
  socket.on("send-chat-message", (message) => {
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
  // send message telling other users that someone disconnected
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log("Now listening"));
});
