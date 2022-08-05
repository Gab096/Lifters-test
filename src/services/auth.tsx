import React, { useState, useContext } from "react";
import api from "./api";
export const AuthContext = React.createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<any>([]);
  const [isChecked, setIsChecked] = useState("");
  const [isColor, setIsColor] = useState("");

  const filteredProducts = products.filter((item: any) => {
    return item.categoria.includes(isChecked);
  });
  const colorFilteredProducts = filteredProducts.filter((item: any) => {
    return item.cores.filter((i: any) => {
      return i.nome.includes(isColor);
    });
  });

  console.log(colorFilteredProducts);

  const data = {
    products: colorFilteredProducts,
    setIsChecked: setIsChecked,
    setIsColor: setIsColor,
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
