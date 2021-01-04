import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const Chat = () => {
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
    </div>
  );
};

export default Chat;
