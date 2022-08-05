import { useAuth } from "../../services/auth";
interface RoundedButtonProps {
  isProduct?: boolean;
  mapdata?: any;
}

const RoundedButton = ({ mapdata, isProduct }: RoundedButtonProps) => {
  const { data }: any = useAuth();

  return (
    <div className="col">
      <button
        className={`btn bg-${mapdata.nome} ${
          isProduct ? "py-3 px-3" : "p-2"
        }  border border-1 border-dark rounded-circle btn-outline`}
        onClick={() => {
          data.setIsColor(mapdata.nome);
        }}
      />
    </div>
  );
};

export default RoundedButton;
