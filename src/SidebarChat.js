import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import { useDispatch } from "react-redux";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
      <Avatar className="sidebarAvatar" />
      <div className="sidebarChat__info">
        <h3>{props.name}</h3>
        <p>Last message sent..</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
