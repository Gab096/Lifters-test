import { useEffect } from "react";
import { useCounterContext } from "../../services/context";
import { Header, Main, Banner } from "../../components";

const Home = () => {
  const { data }: any = useCounterContext();

  return (
    <div className="bg-primary Container min-vh-100">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default Home;
