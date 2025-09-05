export const Button = ({ height, title, onClick, setStatus }) => {
  return (
    <div>
      {" "}
      <button
        onClick={onClick}
        className={
          " rounded-md py-2 px-4 bg-[#F3F4F6] text-black" +
          `${setStatus ? " !bg-[#3C82F6] text-white" : ""}`
        }
        style={{
          height,
        }}
      >
        {title}
      </button>
    </div>
  );
};
