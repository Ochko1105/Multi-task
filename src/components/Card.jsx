export const Card = (props) => {
  return (
    <div>
      <div className="h-[500px] w-[400px] bg-gray-100 mt-[30px]   ">
        <img src={props.image} className="h-[200px] w-[400px] mt-[10px]"></img>
        <div className="pl-[20px] pr-[10px] pb-[10px] flex flex-col gap-[10px]">
          {" "}
          <h1>{props.date}</h1>
          <p>
            <strong>{props.head}</strong>
          </p>
          <p>{props.describtion}</p>
          <button className="bg-blue-500 pl-[140px] pr-[130px] mt-[40px] mr-[5px] mb-[10px] text-white">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
