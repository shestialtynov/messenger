import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SendMessageIcon from "@material-ui/icons/Send";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatName } from "./features/chatSlice";
function Chat(props) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <span>
          {" "}
          <Avatar />
        </span>
        <h4>Name</h4>
      </div>
      {/*Chat messages */}
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      {/*Chat input */}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send message"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <SendMessageIcon onClick={sendMessage} className="chat_send" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
