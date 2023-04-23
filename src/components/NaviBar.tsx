import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiUserFill, RiMedalFill, RiLogoutBoxRFill } from 'react-icons/ri';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GiFeather } from 'react-icons/gi';
import clsx from 'clsx';

import toGETusLogo from 'images/logo.png';

const NaviBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkShowNavi = () => {
    if (pathname === '/') return false;
    return true;
  };

  return checkShowNavi() ? (
    <>
      <div className="grid grid-cols-3 p-3 items-center w-full relative">
        {/* 왼쪽 - 뒤로가기 */}
        <div className="col-span-1">
          <IoIosArrowBack className="cursor-pointer" onClick={() => navigate(-1)} />
        </div>

        {/* 가운데 - 로고 */}
        <div className="col-span-2">
          {/* <img src={toGETusLogo} alt={'togetus logo'} className="h-[4vh]" /> */}
          <Menu as="div" className="relative inline-block text-left w-full">
            <div>
              <Menu.Button>
                <img src={toGETusLogo} alt={'togetus logo'} className="h-[4vh]" />
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
              <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && 'bg-black bg-opacity-5'} flex items-center w-full rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          navigate('/rest-room/profile');
                        }}
                      >
                        <RiUserFill className="mr-2" color="#464646" />
                        <span>신상정보명세서</span>
                      </button>
                    )}
                  </Menu.Item>
                  {/* ArrowForward 있는 버전 */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && 'bg-black bg-opacity-5'} flex items-center w-full rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          navigate('/rest-room/profile/badge');
                        }}
                      >
                        <div className="w-full flex justify-between items-center">
                          <div className="flex justify-between items-center">
                            <GiFeather className="mr-2" color="#464646" />
                            <span>기록들</span>
                          </div>
                          <IoIosArrowForward />
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && 'bg-black bg-opacity-5'} flex items-center w-full rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          navigate('/rest-room/profile/badge');
                        }}
                      >
                        <RiMedalFill className="mr-2" color="#464646" />
                        <span>훈장들</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${active && 'bg-black bg-opacity-5'} flex items-center w-full rounded-md px-2 py-2 text-sm`}
                        onClick={() => navigate('/')}
                      >
                        <RiLogoutBoxRFill className="mr-2" color="#464646" />
                        <span>로그아웃</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* // TODO :: dropdown...custom */}
      {/* <div className="absolute left-0 bg-green-600">test</div> */}
    </>
  ) : (
    <></>
  );
};

export default NaviBar;
