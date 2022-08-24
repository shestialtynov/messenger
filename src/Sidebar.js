import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from "./SidebarChat";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";

function Sidebar(props) {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar__header-avatar"
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search " />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat id="1" name="Alex" />
        <SidebarChat name="Anna" />
        <SidebarChat name="Sam" />
        <SidebarChat name="Diana" />
      </div>
    </div>
  );
}

export default Sidebar;
