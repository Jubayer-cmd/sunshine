import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { name, supplier, price, quantity, images, description } = product;
  return (
    <div>
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
          <Link to="/inventory">Manage</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
