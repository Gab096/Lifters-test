import { useEffect } from "react";
import { useAuth } from "../../services/auth";
import { Header, Main } from "../../components";

const Home = () => {
  const { data, requestApi }: any = useAuth();
  useEffect(() => {
    requestApi();
  }, []);

  return (
    <div className="Container">
      <Header />
      <Main />
    </div>
  );
};

export default Home;
