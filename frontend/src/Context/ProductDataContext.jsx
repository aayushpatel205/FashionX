import React, { useState } from "react";
import { useContext, createContext } from "react";

const ProductDataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [userCartData, setUserCartData] = useState([]);
    return (
        <ProductDataContext.Provider value={{ userCartData, setUserCartData }}>
            {children}
        </ProductDataContext.Provider>
    );
};

export const useProductData = () => useContext(ProductDataContext);