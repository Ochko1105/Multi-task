const Box = () => {
  return (
    <div className="h-[100px] w-[100px]  bg-red-700 text-center   ">Box</div>
  );
};
export { Box };
const Round = () => {
  return (
    <div className="h-[100px] w-[100px] rounded-full  bg-red-700 text-center ">
      Round
    </div>
  );
};
export { Round };
const Card = (props) => {
  return (
    <div>
      <img src={props.image} className="h-[500px] w-[500px]" />
    </div>
  );
};
export { Carddsds };
const Describtion = (props) => {
  return (
    <div className="text-center">
      <h1 className="text-8xl">{props.title}</h1>
      <p className="text-3xl">{props.price}$</p>
    </div>
  );
};
export { Describtion };
