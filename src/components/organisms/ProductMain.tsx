import { Photos, ProductDescription } from "../";
import { useAuth } from "../../services/auth";

const ProductMain = () => {
  const { data }: any = useAuth();
  console.log(data.item);
  return (
    <main className="pt-5">
      <section className="container ">
        <div className="row">
          <div className="col-6">
            <div className="container">
              <div className="row row-cols-2 g-2">
                {data.item.fotos.map((item: any) => (
                  <Photos mapdata={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-6">
            <ProductDescription data={data.item}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductMain;
