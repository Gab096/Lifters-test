import React, { useState, useContext, useEffect } from "react";
import api from "./api";
export const AuthContext = React.createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<any>([]);
  const [isChecked, setIsChecked] = useState("");
  const [isColor, setIsColor] = useState("");
  const [item, setItem] = useState({});
  const [filterProductColor, setFilterProductColor] = useState([]);

  console.log(isColor);

  const filteredProducts = products.filter((item: any) => {
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

    setFilterProductColor(newArray);
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
    products: filteredProducts,
    setIsChecked: setIsChecked,
    setIsColor: setIsColor,
    setItem: setItem,
    item: item,
  };

  return (
    <AuthContext.Provider value={{ data, requestApi }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
