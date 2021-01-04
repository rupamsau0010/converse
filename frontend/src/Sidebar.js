import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";


const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://avatars3.githubusercontent.com/u/54771222?s=460&u=4feb04428f8660b7d9360847ea1c54608047ddee&v=4" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default sidebar;
