import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth";

const Card = ({ mapdata, index }: any) => {
  const navigate = useNavigate();
  const { data }: any = useAuth();
  return (
    <div
      onClick={() => {
        navigate("/product");
        data.setItem(mapdata);
      }}
    >
      <div className="card border-0 bg-primary col">
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
