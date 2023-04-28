import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Welcome to letsmeet api . Click on the link for documentation");
});

io.on("connection", (socket) => 
{
  socket.emit("me", socket.id);
  // console.log(`${socket.id}`);
  socket.on("disconnect", (data) => 
  {
    io.to(data.to).emit("callAccepted", data.signal);
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  // socket.on("send_message", (data) => {
  //   socket.broadcast.emit("receive_message", data);
  //  });
});

server.listen(3001, () => {
  console.log("Server is running on port number 3001");
});
