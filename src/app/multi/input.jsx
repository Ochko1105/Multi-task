export const Input = ({
  value,
  onChange,
  type,
  error,

  placeholder,
  classnameplus,
}) => {
  return (
    <div>
      <div>
        {placeholder} <span className="text-red-700">*</span>
      </div>
      <div>
        {" "}
        <input
          type={type}
          className={
            "border-1 w-[480px] p-3 rounded-xl  text-black" +
            `${error ? " !text-red-500 border-red-600" : ""}` +
            classnameplus
          }
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </div>
      {error ? <div className="text-red-600">{error}</div> : ""}
    </div>
  );
};
