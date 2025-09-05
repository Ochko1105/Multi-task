export const Button = ({ buttontext, primary, onClick, classNameplus }) => {
  return (
    <div>
      {primary && (
        <button
          className={
            "bg-black rounded-md py-2.5 w-[480px] text-white mt-[72px] flex items-center justify-center gap-2" +
            classNameplus
          }
          onClick={onClick}
        >
          {buttontext}
          <span>
            <img src="chevron_right.svg"></img>
          </span>
        </button>
      )}
      {!primary && (
        <button
          className="bg-white rounded-md py-2.5 w-[100px] text-black mt-[72px] border"
          onClick={onClick}
        >
          Back
        </button>
      )}
    </div>
  );
};
