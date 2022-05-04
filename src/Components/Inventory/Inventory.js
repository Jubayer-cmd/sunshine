import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [gadgets, setGadgets] = useState({});
  const { name, supplier, price, quantity, images, description } = gadgets;
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, [id]);

  const handleDelivery = () => {
    const newQuantity = parseInt(quantity) - 1;
    const makeQuantity = { newQuantity };
    //send data to the server
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makeQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("donme");
        const newGadgets = { ...gadgets, quantity: newQuantity };
        setGadgets(newGadgets);
      });
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    const newQuantity = event.target.quantity.value;
    const makeQuantity = { newQuantity };
    console.log(makeQuantity);
    //send data to the server
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(makeQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("donme");
        const newGadgets = { ...gadgets, quantity: newQuantity };
        setGadgets(newGadgets);
      });
  };
  return (
    <div className="d-flex justify-content-center my-5">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
          <ListGroupItem>Supplier: {supplier}</ListGroupItem>
          <ListGroupItem>Quantity: {quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body className="text-center">
          <Button onClick={() => handleDelivery()}>Deliverd</Button>
        </Card.Body>
        <form className="text-center m-2" onSubmit={handlesubmit}>
          <label htmlFor="quantity">Restock the items</label>
          <input
            type="text"
            name="quantity"
            id=""
            placeholder="Enter Quantity"
            required
          />
          <input
            className="bg-primary text-white border-0 p-2 rounded "
            type="submit"
            value="Restock"
          />
        </form>
      </Card>
    </div>
  );
};

export default Inventory;
