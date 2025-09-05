export const Task = ({
  setTodos,
  id,
  isDone,
  taskText,
  draggable,
  onDragStart,
  onDragOver,
  onDragEnd,
}) => {
  const handleOnChange = (event) => {
    setTodos((prev) =>
      prev.map((el) => {
        if (id === el.id) {
          el.isDone = event.target.checked;
        }

        return el;
      })
    );
  };

  const deleteOnChange = () => {
    alert("deleting task");
    setTodos((prev) => {
      return prev.filter((el) => id != el.id);
    });
  };
  return (
    <div
      className="w-[370px] h-[62px] flex items-center my-5 px-4 gap-2.5 rounded-md bg-[#F9FAFB] justify-between text-[14px]"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div className="flex gap-2.5">
        <input
          onChange={handleOnChange}
          checked={isDone}
          type="checkbox"
          className="accent-blue-600 h-[20px] w-5 shadow-[#015FCC]"
        ></input>

        {isDone ? (
          <div className="text-black line-through ">{taskText}</div>
        ) : (
          <div className="text-black text-start">{taskText}</div>
        )}
      </div>

      <div>
        <button
          onClick={deleteOnChange}
          className="p-3 bg-[#FEF2F2] text-[#EF4444] rounded-xl  "
        >
          Delete
        </button>
      </div>
    </div>
  );
};
