import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message(id, contents) {
  return <div className="message">
     <Avatar/>
     <p>This is a messa</p>
     <small>timestamp</small>
  </div>;
}

export default Message;
