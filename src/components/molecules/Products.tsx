import { Card } from "../";
import { useAuth } from "../../services/auth";

const Products = () => {
  const { data }: any = useAuth();
  return (
    <div>
      <div className="row mt-5 justify-content-end">
        <p className="col-3 text-end">
          Showing {data.products.length} Products
        </p>
      </div>
      <div className="row row-cols-3">
        {data.products.map((item: any, index: any) => (
          <Card key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
