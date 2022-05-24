import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inventory = () => {
  const { id } = useParams();
  const [gadgets, setGadgets] = useState({});
  const navigate = useNavigate();
  const navigateToManage = () => {
    navigate("/manage");
  };
  const { name, supplier, price, quantity, images, description } = gadgets;
  useEffect(() => {
    const url = `https://evening-mesa-55779.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, [id]);

  const handleDelivery = () => {
    const newQuantity = parseInt(quantity) - 1;
    const makeQuantity = { newQuantity };
    //send data to the server
    const url = `https://evening-mesa-55779.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makeQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("📦 Item has been deliverd!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        const newGadgets = { ...gadgets, quantity: newQuantity };
        setGadgets(newGadgets);
      });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const totalQuantity = event.target.quantity.value;
    const newQuantity = parseInt(quantity) + parseInt(totalQuantity);
    const makeQuantity = { newQuantity };
    console.log(makeQuantity);
    //send data to the server
    const url = `https://evening-mesa-55779.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makeQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("🏭 Restock succesfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        event.target.reset();
        const newGadgets = { ...gadgets, quantity: newQuantity };
        setGadgets(newGadgets);
      });
  };
  return (
    <div
      className="d-flex justify-content-center my-5"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="card mb-3 shadow" style={{ width: "800px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={images} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price: {price}</ListGroupItem>
                <ListGroupItem>Supplier: {supplier}</ListGroupItem>
                <ListGroupItem>Quantity: {quantity}</ListGroupItem>
              </ListGroup>
              <Card.Body className="text-center">
                {parseInt(quantity) < 1 ? (
                  <Button className="bg-danger disabled">Sold</Button>
                ) : (
                  <Button onClick={() => handleDelivery()}>Delivery</Button>
                )}
                <Button className="bg-success mx-2" onClick={navigateToManage}>
                  Manage Inventories
                </Button>
              </Card.Body>
              <form className="text-center m-2" onSubmit={handlesubmit}>
                <label htmlFor="quantity">Restock the items</label> <br />
                <input
                  type="text"
                  name="quantity"
                  id=""
                  autocomplete="off"
                  placeholder="Enter Quantity"
                  required
                />
                <input
                  className="bg-primary mx-auto text-white m-2 border-0 p-2 rounded "
                  type="submit"
                  value="Restock"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
