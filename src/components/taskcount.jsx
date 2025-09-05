export const Tasks = (props) => {
  return (
    <div className="flex justify-between  pl-[12px] pr-[16px] pt-[36px]">
      <p className="text-gray-400">0 of {props.count} tasks completed </p>
      <p className="text-red-400">Clear completed </p>{" "}
    </div>
  );
};
