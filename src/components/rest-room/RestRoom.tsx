import { Link, useNavigate } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import clsx from 'clsx';
import { useRecoilValue } from 'recoil';
import { userProfileState } from 'atoms/userProfile';

type TParty = {
  name: string;
  member: {
    name: string;
    profileImageSource: string;
  }[];
};

const dummyPartyData: TParty[] = [
  { name: '#오운완', member: [{ name: 'user1', profileImageSource: 'test' }] },
  {
    name: '자네 척척석사로 삶을 마감할텐가',
    member: [
      { name: 'user1', profileImageSource: 'test' },
      { name: 'user2', profileImageSource: 'test' },
      { name: 'user3', profileImageSource: 'test' },
    ],
  },
  {
    name: '흐아앙',
    member: [
      { name: 'user1', profileImageSource: 'test' },
      { name: 'user2', profileImageSource: 'test' },
      { name: 'user3', profileImageSource: 'test' },
      { name: 'user4', profileImageSource: 'test' },
    ],
  },
  {
    name: '일어나... 점심 먹어야지',
    member: [
      { name: 'user1', profileImageSource: 'test' },
      { name: 'user2', profileImageSource: 'test' },
      { name: 'user3', profileImageSource: 'test' },
      { name: 'user4', profileImageSource: 'test' },
      { name: 'user5', profileImageSource: 'test' },
      { name: 'user6', profileImageSource: 'test' },
    ],
  },
];

const RestRoom = () => {
  const userProfile = useRecoilValue(userProfileState);

  return (
    <main className="h-[100%] flex flex-col justify-between items-center ">
      {/* 레이아웃을 위해 유저 프로필 + Party List */}
      <div>
        {/* 유저 프로필 */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <img src={userProfile.image} alt="user profile image" className="w-[6rem] h-[6rem] rounded-full" />
          <div className="text-lg">
            <p>
              <span className="text-xl">{userProfile.name}</span>님,
            </p>
            <p>오늘도 갓생 #가보자고!</p>
          </div>
        </div>
        {/* Party List */}
        <PartyList data={dummyPartyData} />
      </div>

      {/* Create New Party */}
      <Link to="/party/new">
        <div className="flex items-center">
          <BsPlus />
          <span>새로운 파티 만들어버리기</span>
        </div>
      </Link>
    </main>
  );
};

export default RestRoom;

type PPartyList = {
  data: TParty[];
};

const PartyList = (props: PPartyList) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-wrap gap-6">
      {data.map((party, index) => (
        <div
          key={`party list ${index}th`}
          // className="bg-red-200 w-[8rem] h-[8rem] p-5 rounded-md flex flex-col justify-between items-center cursor-pointer"
          className="bg-red-200 w-[100px] h-[100px] cursor-pointer"
          onClick={() => navigate('/party/party-name')}
        >
          {party.name}
          {/*     <a onClick={() => navigate('/party/party-name')}>
            <span className="leading-4">{party.name}</span>
            <div className="flex items-center">
              {/* // TODO :: 쫌쫌따리 작아지는 이미지
              {party.member.slice(0, 3).map((m, index) => (
                <div key={index}>
                  <img
                    className={`rounded-full w-[${2 - 0.5 * index}em] h-[${2 - 0.5 * index}em]`}
                    src={'https://picsum.photos/200/200'}
                    // src={testImage}
                    alt={`${m.name} profile image`}
                  />
                  <span>{2 - 0.5 * index}</span>
                </div>
              ))}
              {party.member.length > 3 && <span className="text-sm">+ {party.member.length - 3}</span>}
            </div>
          </a> */}
        </div>
      ))}
    </div>
  );
};
