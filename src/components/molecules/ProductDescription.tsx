import RoundedButton from "../atomic/RoundedButton";

const ProductDescription = ({ data }: any) => {
  return (
    <div>
      <h1>{data.titulo}</h1>
      <h6>{data.valor}</h6>
      <p className="w-50 mt-4">{data.descricao}</p>
      <h6 className="text-black-50">Color</h6>
      <div className="row">
        {data.cores.map((item: any) => (
          <div className="col-1">
            <RoundedButton isProduct mapdata={item} />
          </div>
        ))}
      </div>
      <h6 className="text-black-50">Size</h6>
    </div>
  );
};

export default ProductDescription;
