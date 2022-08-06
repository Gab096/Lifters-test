import { useNavigate } from "react-router-dom";
import { RoundedButton, Size } from "../index";

const ProductDescription = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-between px-5 h-vh-100">
      <div>
        <h1>{data.titulo}</h1>
        <h6>{data.valor}</h6>
        <p className="w-50 mt-4">{data.descricao}</p>
        <h6 className="text-black-50">Color</h6>
        <div className="d-flex gap-2">
          {data.cores.map((item: any) => (
            <div>
              <RoundedButton isProduct mapdata={item} />
            </div>
          ))}
        </div>
        <h6 className="text-black-50 mt-3">Size</h6>
        <div className="d-flex gap-2">
          {data.tamanhos.map((item: any) => (
            <Size mapdata={item} />
          ))}
        </div>
      </div>
      <button
        className="align-self-start btn btn-dark w-25 rounded-0"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ProductDescription;
