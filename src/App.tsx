import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Login from 'components/members/Login';
import GoogleCallback from 'components/members/GoogleCalback';
import NaviBar from 'components/NaviBar';

import RestRoom from 'components/rest-room/RestRoom';
import SignUp from 'components/members/SignUp';
import NewParty from 'components/rest-room/CreateNewParty';
import Profile from 'components/rest-room/profile/Profile';
import History from 'components/rest-room/profile/Hisroty';
import BadgeRoom from 'components/rest-room/profile/BidgeRoom';
import PartyRounge from 'components/rounge/PartyRounge';
import NewPost from 'components/rounge/NewPost';
import Alarm from 'components/rounge/Alarm';
import Setting from 'components/rounge/PartySetting';
import PartyHistory from 'components/rounge/PartyHistory';

/**
 * 우선 스마트폰 기준으로 작업! 반응형은 나중에
 */

const App = () => {
  return (
    <RecoilRoot>
      <div className="bg-black !box-border">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <main className="container flex flex-row justify-center sm:flex-col h-[100vh] bg-gradient-to-tl from-[#E9DEFA] to-[#FBFCDB]">
            <NaviBar />
            <div className="min-w-[375px] flex-grow p-[4vw] overflow-auto scrollbar-hide">
              {/* <div className="bg-orange-300 md:h-[calc(100vh-102px)] lg:[100vh]"> */}
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
                <Route path="/party/party-name/setting/history" element={<PartyHistory />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
};

export default App;
