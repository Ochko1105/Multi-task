export const Button = (props, onClick) => {
  if (props.primary === "true") {
    return (
      <button
        onClick={onClick}
        className="bg-blue-600 rounded-[6px] pt-[8px] pl-[16px] pb-[8px] pr-[16px] text-center flex justify-center text-white"
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button className="bg-gray-200 rounded-[6px] pt-[8px] pl-[16px] pb-[8px] pr-[16px] text-center flex justify-center text-black">
        {props.text}
      </button>
    );
  }
};
