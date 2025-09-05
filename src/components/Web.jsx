export const Heading = () => {
  return (
    <div className="flex justify-between text-3xl text-black bg-gray-100 pl-[10px] pr-[10px]">
      <h1>Simple blog</h1>
      <div className="flex gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};
export const Header = () => {
  return (
    <div className="w-[1500px] h-[500px] text-center pt-20 bg-gray-100 ">
      <div>
        <h1 className="text-5xl">Welcome to Simple Blog</h1>
        <p className="pt-10 text-2xl  pl-[260px] pr-[300px]">
          Discover insightful articles about web development,programming,and
          technology,Clean design meets quality content.
        </p>
        <h1 className="text-4xl pt-40">Latest Posts</h1>
      </div>
    </div>
  );
};
