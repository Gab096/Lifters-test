const Photos = ({ mapdata }: any) => {
  return (
    <div className="col p-1 ">
      <img
        style={{ height: "100%", width: "100%" }}
        src={mapdata.url}
        alt="produto"
      />
    </div>
  );
};

export default Photos;
