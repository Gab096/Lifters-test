import { useAuth } from "../../services/auth";

const Checkbox = ({ mapdata }: any) => {
  const { data }: any = useAuth();
  return (
    <div className="mt-2 form-check">
      <input
        className="form-check-input  rounded-0"
        type="checkbox"
        onChange={(e) => data.setIsChecked(mapdata.name)}
        id="flexCheckIndeterminate"
      />
      <label className="form-check-label" htmlFor="flexCheckIndeterminate">
        {mapdata.name}
      </label>
    </div>
  );
};

export default Checkbox;
