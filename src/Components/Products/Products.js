import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { _id, name, supplier, price, quantity, images, description } = product;
  const navigate = useNavigate();
  const navigateToGadgetDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div data-aos="fade-up" data-aos-delay="400">
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
          <Button onClick={() => navigateToGadgetDetail(_id)}>Update</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
