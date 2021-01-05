import React, { useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./chat.css";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  SendOutlined,
} from "@material-ui/icons";
import axios from "./axios";

function Chat({ message }) {
  const [input, setInput] = useState("");
  const sendMessage = async(e) => {
    e.preventDefault();

    axios.post("/message/new", {
      message: input,
      name: "Rupam",
      timestamp: "Just now",
      received: true,
    });

    setInput("")
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {message.map((messageOne) => (
          <p
            className={`chat_message ${messageOne.received && "chat_reciever"}`}
          >
            <span className="chat_name">{messageOne.name}</span>
            {messageOne.message}
            <span className="chat_timestamp">{messageOne.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          ></input>
          <button type="submit" onClick={sendMessage}>
            <IconButton>
              <SendOutlined />
            </IconButton>
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
