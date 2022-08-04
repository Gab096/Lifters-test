import React, { useState, useContext } from "react";
import api from "./api";
export const AuthContext = React.createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<any>([]);
  const data = {
    products: products,
  };
  const requestApi = () => {
    return api
      .get("")
      .then((response: any) => {
        setProducts(response.data);
      })
      .catch((err: any) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  };

  return (
    <AuthContext.Provider value={{ data, requestApi }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
