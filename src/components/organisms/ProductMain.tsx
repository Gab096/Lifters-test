import { Photos } from "../";
import { useAuth } from "../../services/auth";

const ProductMain = () => {
  const { data }: any = useAuth();
  return (
    <main className="pt-5">
      <section className="container ">
        <div className="row">
          <div className="col-12">{
            
          }</div>
        </div>
      </section>
    </main>
  );
};

export default ProductMain;
