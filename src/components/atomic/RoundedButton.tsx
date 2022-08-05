import { useAuth } from "../../services/auth";

const RoundedButton = ({ mapdata }: any) => {
  const { data }: any = useAuth();
  
  return (
    <div className="col">
      <button
        className={`btn bg-${mapdata.name} p-2  border border-1 border-dark rounded-circle btn-outline`}
        onClick={() => {
          data.setIsColor(mapdata.name);
        }}
      />
    </div>
  );
};

export default RoundedButton;
