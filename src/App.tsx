import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/members/Login";
import GoogleCallback from "./components/members/GoogleCalback";

import RestRoom from "./components/rest-room/RestRoom";
import SignUp from "./components/members/SignUp";
import NewParty from "./components/rest-room/CreateNewParty";
import Profile from "./components/rest-room/profile/Profile";
import History from "./components/rest-room/profile/Hisroty";
import BadgeRoom from "./components/rest-room/profile/BidgeRoom";
import PartyRounge from "./components/rounge/PartyRounge";
import NewPost from "./components/rounge/NewPost";
import Alarm from "./components/rounge/Alarm";
import Setting from "./components/rounge/PartySetting";
import PartyHistory from "./components/rounge/PartyHistory";

const App = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
      style={{ width: "100vh", height: "100vh" }}
    >
      <div className="container">
        <BrowserRouter>
          <Routes>
            {/* Members */}
            <Route path="/" element={<Login />} />
            <Route path="/login/google/callback" element={<GoogleCallback />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* RestRoom */}
            <Route path="/rest-room" element={<RestRoom />} />
            <Route path="/rest-room/profile" element={<Profile />} />
            <Route path="/rest-room/profile/history" element={<History />} />
            <Route path="/rest-room/profile/badge" element={<BadgeRoom />} />
            <Route path="/party/new" element={<NewParty />} />
            {/* Party */}
            <Route path="/party/party-name" element={<PartyRounge />} />
            <Route path="/party/party-name/post" element={<NewPost />} />
            <Route path="/party/party-name/alarm" element={<Alarm />} />
            <Route path="/party/party-name/setting" element={<Setting />} />
            <Route
              path="/party/party-name/setting/history"
              element={<PartyHistory />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
