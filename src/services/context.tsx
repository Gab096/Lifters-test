import React, { useState, useContext, useEffect } from "react";
import api from "./api";
export const AuthContext = React.createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<any>([]);
  const [product, setProduct] = useState({});
  const [isChecked, setIsChecked] = useState("");
  const [isColor, setIsColor] = useState("");

  let filtered = products;

  filtered = products.filter((item: any) => {
    return item.categoria.includes(isChecked);
  });

  useEffect(() => {
    const newArray: any = [];

    products.map((product: any) => {
      product.cores.map((cor: any) => {
        if (cor.nome === isColor) {
          newArray.push(product);
        }
      });
    });

    setProducts(newArray);
  }, [isColor]);
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

  React.useEffect(() => {
    requestApi();
  }, []);

  const data = {
    products: filtered,
    product: product,
    setProduct: setProduct,
    setIsChecked: setIsChecked,
    setIsColor: setIsColor,
  };

  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};

export const useCounterContext = () => useContext(AuthContext);
