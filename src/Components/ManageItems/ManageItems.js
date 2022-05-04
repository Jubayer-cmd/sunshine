import React from "react";
import { Table } from "react-bootstrap";
import UseGadgets from "../Hooks/UseGadgets";
import ManageItem from "../ManageItem/ManageItem";

const ManageItems = () => {
  const [products, setProduct] = UseGadgets([]);
  return (
    <div className="text-center" data-aos="fade-up" data-aos-delay="400">
      <h1>Manage Items</h1>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>images</th>
            <th>Name</th>
            <th>description</th>
            <th>price</th>
            <th>quantity</th>
            <th>supplier</th>
          </tr>
        </thead>
        {products.map((product) => (
          <ManageItem
            key={product._id}
            product={product}
            setProduct={setProduct}
          ></ManageItem>
        ))}
      </Table>
    </div>
  );
};

export default ManageItems;
