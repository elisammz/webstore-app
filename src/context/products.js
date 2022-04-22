import React, { useState, useEffect, createContext } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import * as queries from "../api/queries";
import * as mutations from "../api/mutations";
import { processOrder } from "../api/mutations";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState([]);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      await API.graphql({
        query: mutations.processOrder,
        variables: { input: payload },
      });

      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await API.graphql({
        query: queries.listProducts,
        authMode: "API_KEY",
      });
      const products = data.listProducts.items;
      const featured = products.filter((product) => {
        return !products.featured;
      });
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider value={{ products, featured, loading, checkout }}>
      {children}
    </ProductContext.Provider>
  );
};
