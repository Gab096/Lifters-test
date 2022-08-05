import { Filters, Products } from "../index";

const Main = () => {
  return (
    <main className="pt-5 ">
      <section className="container ">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9">
            <Products />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
