import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

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
  return (
    <main className="h-[100%] flex flex-col justify-between items-center ">
      {/* Party List */}
      <section className="w-full">
        <PartyList data={dummyPartyData} />
      </section>

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
  return (
    <div>
      {data.map((party) => (
        <>
          <p>{party.name}</p>
          {party.member.map((m) => (
            <>
              <p>
                {m.name}: {m.profileImageSource}
              </p>
            </>
          ))}
        </>
      ))}
    </div>
  );
};
