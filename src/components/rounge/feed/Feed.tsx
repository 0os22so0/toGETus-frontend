import Post from './Post';

const Feed = () => {
  return (
    <section className="flex flex-col w-full gap-6">
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Feed;
