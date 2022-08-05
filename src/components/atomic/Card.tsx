const Card = ({ data, index }: any) => {
  return (
    <div>
      <div className="card border-0 bg-primary col">
        {data.fotos.map((i: any) => {
          if (i.capa) {
            return <img src={i.url} className="card-img-top" alt="..." />;
          }
        })}{" "}
        <div className="row mt-2">
          <p className="col-10">{data.titulo}</p>
          <p className="col-2 text-end">
            <small>{data.tamanhos[2]}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
