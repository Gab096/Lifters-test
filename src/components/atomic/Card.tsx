import { useNavigate } from "react-router-dom";
import { useCounterContext } from "../../services/context";

const Card = ({ mapdata, index }: any) => {
  const navigate = useNavigate();
  const { data }: any = useCounterContext();
  return (
    <div
      onClick={() => {
        navigate("/product");
        data.setProduct(mapdata);
      }}
    >
      <div
        className="card border-0 datepicker  bg-primary col"
        style={{ cursor: "pointer" }}
      >
        {mapdata.fotos.map((item: any, index: number) => {
          if (item.capa) {
            return (
              <img
                key={index}
                src={item.url}
                className="card-img-top"
                alt={`produto ${index}`}
              />
            );
          }
        })}
        <div className="row mt-2">
          <p className="col-10">{mapdata.titulo}</p>
          <p className="col-2 text-end">
            <small>{mapdata.tamanhos[2]}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
