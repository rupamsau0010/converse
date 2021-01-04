import React from "react";
import "./sidebarChat.css";
import { Avatar, IconButton } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
