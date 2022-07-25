//REACT CHAT PLUGINnpm install react-chat-ui
//REACT CHAT UI npm install react-chat-ui
//REACT DOM npm install react react-dom
//https://codesandbox.io/s/zu23u?file=/src/App.js:75-181
import React, { useState } from "react";
//import ReactDOM from 'react-dom'
//import { ChatFeed, Message } from "react-chat-ui";
//import ChatBox, { ChatFrame } from "react-chat-plugin";
import ChatBox from "react-chat-plugin";
import './Chatroom.css'
import Header from "./Header";


function ChatRoom() {
  // state to hold dummy data / array of objects
  const [messages, setMessages] = useState([
    {
      text: "RandomGirl has joined the conversation",
      timestamp: 1578366389250,
      type: "notification",
    },
    {
      author: {
        username: "RandomBoy",
        id: 1,
        avatarUrl: "/logo512.png",
      },
      text: "Hi",
      type: "text",
      timestamp: 1578366393250,
    },
    {
      author: { username: "RandomGirl", id: 2, avatarUrl: "/logo512.png" },
      text: "Show two buttons",
      type: "text",
      timestamp: 1578366425250,
      buttons: [
        {
          type: "URL",
          title: "Yahoo",
          payload: "http://www.yahoo.com",
        },
        {
          type: "URL",
          title: "Example",
          payload: "http://www.example.com",
        },
      ],
    },
    {
      author: {
        username: "RandomBoy",
        id: 1,
        avatarUrl: "/logo512.png",
      },
      text: "What's up?",
      type: "text",
      timestamp: 1578366425250,
      hasError: true,
    },
  ]);

  // sets the data / info to the state
  const handleOnSendMessage = (message) => {
    setMessages(
      messages.concat({
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "/logo512.png",
        },
        text: message,
        timestamp: +new Date(),
        type: "text",
      })
    );
  };

  return (
    <div className="app">
      <Header />
      <ChatBox
        messages={messages}
        userId={1}
        onSendMessage={handleOnSendMessage}
        width={"100vw"}
        height={"90vh"}
      />
    </div>
  );
}

export default ChatRoom;
