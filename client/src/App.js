import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/HomePage.js";
import { Login } from "./pages/LoginPage";
import { Chat } from "./pages/ChatPage";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AppContext, socket } from "./context/appContext";

function App() {
  const user = useSelector((state) => state.user);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});

  return (
    // <AppContext.Provider
    //   value={{
    //     socket,
    //     members,
    //     setMembers,
    //     messages,
    //     setMessages,
    //     privateMemberMsg,
    //     setPrivateMemberMsg,
    //     newMessages,
    //     setNewMessages,
    //   }}
    // >
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {!user && <Route path="/login" element={<Login />}></Route>}
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
    // {/* </AppContext.Provider> */}
  );
}

export default App;
