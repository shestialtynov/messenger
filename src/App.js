import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import "./App.css";
import Imessage from "./Imessage";
import Login from "./Login";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
