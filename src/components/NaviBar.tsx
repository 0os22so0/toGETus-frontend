// import { FaUserCircle } from "react-icons/fa";
import { clsx } from 'clsx';
import ProfileImage from 'images/profile.jpg';

const NaviBar = () => {
  const checkShowNavi = () => {
    if (window.location.pathname) return false;
  };
  checkShowNavi();
  return checkShowNavi() ? (
    <div className={clsx('flex justify-between align-middle border-slate-400', 'p-3 border-b border-slate-200')}>
      {/* 왼쪽 */}
      <div className="bg-red-200">
        <span>left</span>
      </div>
      {/* 가운데 */}
      <div className="bg-yellow-200">
        <span>center</span>
      </div>
      {/* 오른쪽 */}
      <button onClick={() => console.log('profile')}>
        <div className="flex space-x-2">
          <img src={ProfileImage} alt="profile" className="rounded-full w-[32px] h-[32px]" />
        </div>
      </button>
    </div>
  ) : (
    <></>
  );
};

export default NaviBar;
