import { Photos, ProductDescription } from "../";
import { useCounterContext } from "../../services/context";

const ProductMain = () => {
  const { data }: any = useCounterContext();
  console.log(data.product);
  return (
    <main className="py-5 h-100">
      <section className="container h-100">
        <div className="d-flex h-100">
          <div className="">
            <div className="container ">
              <div className="row row-cols-2  h-vh-100">
                {data.product.fotos.map((item: any) => (
                  <Photos mapdata={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-100">
            <ProductDescription data={data.product} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductMain;
