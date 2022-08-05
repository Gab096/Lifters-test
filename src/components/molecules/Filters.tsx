import { filterCheckbox } from "../../__Mocks__/filterCheckbox";
import { filterColor } from "../../__Mocks__/filterColor";
import { Checkbox, RoundedButton } from "../";

const Filters: React.FC = () => {
  return (
    <div>
      <div className="row ">
        <h3 className="col-4">Filters</h3>
        <button
          type="button"
          className="text-secondary   col-4 btn btn-sm btn-link "
          onClick={(e) => {
            location.reload();
          }}
        >
          Clear filters
        </button>
      </div>
      <h6 className="text-bold mt-3">
        <strong>Categories</strong>
      </h6>
      {filterCheckbox.map((item, index) => (
        <Checkbox key={index} mapdata={item} />
      ))}
      <h6 className="text-bold mt-3">
        <strong>Color</strong>
        <div className="col-5">
          <div className="row row-cols-5 g-1 ">
            {filterColor.map((item, index) => (
              <RoundedButton key={index} mapdata={item} />
            ))}
          </div>
        </div>
      </h6>
    </div>
  );
};

export default Filters;
