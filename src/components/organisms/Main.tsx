import { Filters, Products } from "../index";

const Main = () => {
  return (
    <div className="bg-primary pt-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
