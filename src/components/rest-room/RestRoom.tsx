import { Link } from 'react-router-dom';
import BasicButton from 'components/BasicButton';

const RestRoom = () => {
  return (
    <main className="flex flex-col justify-between items-center">
      {/* Party List */}
      <section className="w-full">
        <Party />
      </section>

      {/* Create New Party Button */}
      <BasicButton className="bg-togetus-emoji w-full mt-[1vh]">
        <Link to="/party/new">새 파티 만들기</Link>
      </BasicButton>
    </main>
  );
};

export default RestRoom;

const Party = () => {
  return (
    <div>
      {/* <img src="https://picsum.photos/200" className="rounded-full w-[25vw] outline outline-2 outline-offset-2" /> */}
      {/* <div className="flex items-center justify-center"> */}
      <div>
        <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex items-center justify-center bg-gray-800 back">
            <img src="https://picsum.photos/200" className="rounded-full w-[25vw]" />
          </div>
        </div>
      </div>
    </div>
  );
};
