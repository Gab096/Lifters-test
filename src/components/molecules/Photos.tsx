const Photos = ({ mapdata }: any) => {
  return (
    <div className="col">
      <img
        style={{ height: "100%", width: "100%" }}
        src={mapdata.url}
        alt="produto"
      />
    </div>
  );
};

export default Photos;
