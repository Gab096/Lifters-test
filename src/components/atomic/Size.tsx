const Size = ({ mapdata }: any) => {
  return (
    <button
      className="border border-secondary py-2 text-center"
      style={{ width: "50px" }}
    >
      {mapdata}
    </button>
  );
};

export default Size;
