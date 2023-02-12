import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import ProfileImage from 'images/profile.jpg';
import toGETusLogo from 'images/logo.png';

const NaviBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkShowNavi = () => {
    if (pathname === '/') return false;
    return true;
  };

  return checkShowNavi() ? (
    <div className="flex justify-between items-center p-3 bg-white border-b border-slate-200">
      {/* 왼쪽 */}
      <div className="">
        <span className="text-xs">Something</span>
      </div>

      {/* Logo - toGETus */}
      <img src={toGETusLogo} alt={'togetus logo'} className="h-[4vh]" />

      {/* User Profile */}
      {/* <button onClick={() => console.log('profile')}>
        <img src={ProfileImage} alt="Profile Image" className="rounded-full w-[32px] h-[32px]" />
      </button> */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <img src={ProfileImage} alt="Profile Image" className={clsx('rounded-full w-[32px] h-[32px]')} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-yellow-200'} flex w-full rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      navigate('/rest-room/profile');
                    }}
                  >
                    💡 내 정보
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-yellow-200'} flex w-full rounded-md px-2 py-2 text-sm`}
                    onClick={() => {
                      navigate('/rest-room/profile/badge');
                    }}
                  >
                    😎 내 와기뱃지들
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${active && 'bg-yellow-200'} flex w-full rounded-md px-2 py-2 text-sm`} onClick={() => navigate('/')}>
                    👋 로그아웃
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  ) : (
    <></>
  );
};

export default NaviBar;
