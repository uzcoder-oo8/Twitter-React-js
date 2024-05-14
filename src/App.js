import { Routes, Route } from "react-router-dom";

import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Enter from "./Components/Enter/Enter";
import Explore from "./Components/Explore/Explore";
import Home from "./Components/Home/Home";
import Lists from "./Components/Lists/Lists";
import Login from "./Components/Login/Login";
import Messages from "./Components/Messages/Messages";
import Notifications from "./Components/Notifications/Notifications";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
      {/* <Enter /> */}

      {/* <Login /> */}

      {/* <Home/> */}
      {/* <Explore /> */}
      {/* <Notifications /> */}
      {/* <Messages /> */}
      {/* <Bookmarks /> */}
      {/* <Lists /> */}
      {/* <Profile /> */}

      <Routes>
        <Route path="/" element={<Enter />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/lists" element={<Lists />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
