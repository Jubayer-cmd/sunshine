import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import OrderItems from "../OrderItems/OrderItems";
import auth from "./../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [gadgets, setGadgets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://evening-mesa-55779.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setGadgets(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gadgets]);
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="text-center"
      data-aos="fade-up"
    >
      {gadgets.length > 0 ? (
        <h1 className="text-primary">
          My Items : <small>{user.email}</small>{" "}
        </h1>
      ) : (
        <h1 className="text-primary">
          Please add an Items :<small>{user.email}</small>
        </h1>
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
