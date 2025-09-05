export const Input = (props) => {
  if (props.checked === true) {
    return (
      <div className="w-[357px] h-[62px] text-black bg-gray-100 rounded-md text-start ">
        <div className=" flex items-center gap-[20px] justify-between pr-[16px] pl-[12px] mt-[16px]">
          <div className="flex gap-[10px]">
            <input
              checked={props.checked}
              type="checkbox"
              className="h-[20px] w-5  accent-blue-600"
              onChange={props.onChange}
            />
            <p className="text-[14px] font-normal">{props.alltext}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.checkeded === false) {
    return (
      <div className="w-[357px] h-[62px] text-black bg-gray-100 rounded-md text-start ">
        <div className=" flex items-center gap-[20px] justify-between pr-[16px] pl-[12px] mt-[16px]">
          <div className="flex gap-[10px]">
            {" "}
            <input
              type="checkbox"
              checked
              className="h-[20px] w-5  accent-blue-600"
            />
            <p className="line-through text-[14px] font-normal">
              {props.alltext}
            </p>
          </div>

          <button className="bg-red-100 text-red-400 px-[12px] py-[6px] rounded-md ">
            Delete
          </button>
        </div>
      </div>
    );
  }
};
