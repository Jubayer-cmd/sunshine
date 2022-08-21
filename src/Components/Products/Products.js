import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { name, price, image, duration, constructor } = product;
  const navigate = useNavigate();
  const navigateToGadgetDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div data-aos="fade-up" data-aos-delay="400">
      <Card className="shadow min-h-25">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price}</ListGroupItem>
          <ListGroupItem>Supplier: {duration}</ListGroupItem>
          <ListGroupItem>Quantity: {constructor}</ListGroupItem>
        </ListGroup>
        <Card.Body className="text-center">
          <Button onClick={() => navigateToGadgetDetail()}>BUY</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
