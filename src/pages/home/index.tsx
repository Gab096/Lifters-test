import { useEffect } from "react";
import { useAuth } from "../../services/auth";
import { Header } from "../../components";

const Home = () => {
  const { data, requestApi }: any = useAuth();
  useEffect(() => {
    requestApi();
  }, []);

  return (
    <div className="Container">
      <Header />
    </div>
  );
};

export default Home;
