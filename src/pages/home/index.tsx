import { useEffect } from "react";
import { useAuth } from "../../services/auth";
import { Header, Main, Banner } from "../../components";

const Home = () => {
  const { data }: any = useAuth();
 

  return (
    <div className="bg-primary Container min-vh-100">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default Home;
