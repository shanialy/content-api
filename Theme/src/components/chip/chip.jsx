const Chip = ({ value, _delete }) => {
  return (
    <>
      <div className="flex justify-center items-center h-7 p-1 bg-red-500 rounded-2xl">
        <p className="ml-1 text-white">{value}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            _delete(value);
          }}
          className="flex justify-center items-center text-xs font-medium	 rounded-2xl bg-white text-black ml-1.5 h-5 w-5"
        >
          X
        </button>
      </div>
    </>
  );
};

export default Chip;
