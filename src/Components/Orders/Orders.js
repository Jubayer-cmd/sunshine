import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import OrderItems from "../OrderItems/OrderItems";
import auth from "./../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `https://evening-mesa-55779.herokuapp.com/order?email=${email}`;
    axios.get(url).then((response) => setGadgets(response.data));
  }, [gadgets]);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="text-center"
      data-aos="fade-up"
    >
      {gadgets.length > 0 ? (
        <h1 className="text-primary">My Items</h1>
      ) : (
        <h1 className="text-primary">Please add an Items</h1>
      )}
      {gadgets.length > 0 && (
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
          {gadgets.map((gadget) => (
            <OrderItems
              key={gadget._id}
              gadget={gadget}
              setGadgets={setGadgets}
            ></OrderItems>
          ))}
        </Table>
      )}
    </div>
  );
};

export default Orders;
