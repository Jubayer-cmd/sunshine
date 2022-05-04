import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://evening-mesa-55779.herokuapp.com/inventory")
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <div>
      <h1>Manage Items</h1>
      {products.map((product) => (
        <ManageItem key={product._id} product={product}></ManageItem>
      ))}
    </div>
  );
};

export default ManageItems;
