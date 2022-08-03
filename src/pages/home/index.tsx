import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../services/auth";

const Home = () => {
  const { user, requestApi }: any = useContext(AuthContext);
  useEffect(() => {
    requestApi();
  }, []);

  console.log(user.data);

  return <div>oi</div>;
};

export default Home;
