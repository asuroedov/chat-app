import { io, Socket } from "socket.io-client";
import {
  addUserInChat,
  handleCreateChatSuccess,
  handleGenerateJoinLinkSuccess,
  handleGetMessagesSuccess,
  handleGetUserChatsSuccess,
  handleSendMessagesSuccess,
} from "./service";
import { socketEventNames } from "./socketEventNames";

let socket: Socket;

export function initializeSocket(token: string) {
  socket = io("ws://localhost:5050", {
    extraHeaders: { token },
    autoConnect: true,
  });

  socket.on(socketEventNames.createChatSuccess, handleCreateChatSuccess);
  socket.on(socketEventNames.getUserChatsSuccess, handleGetUserChatsSuccess);
  socket.on(socketEventNames.generateJoinLinkSuccess, handleGenerateJoinLinkSuccess);
  socket.on(socketEventNames.addUserInChatSuccess, addUserInChat);
  socket.on(socketEventNames.getMessagesSuccess, handleGetMessagesSuccess);
  socket.on(socketEventNames.sendMessageSuccess, handleSendMessagesSuccess);
}

export function getSocket() {
  return socket;
}
