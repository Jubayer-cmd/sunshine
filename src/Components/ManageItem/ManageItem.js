import React from "react";
import { Button } from "react-bootstrap";

const ManageItem = ({ product, setProduct }) => {
  const { _id, name, supplier, price, quantity, images, description } = product;
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = product.filter((service) => service._id !== id);
          setProduct(remaining);
        });
    }
  };
  return (
    <tbody data-aos="fade-down" data-aos-delay="400">
      <tr>
        <td>
          <img src={images} width={"100px"} alt="" />
        </td>
        <td>{name}</td>
        <td className=" align-items-center">{description}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{supplier}</td>
        <td>
          <Button>Add</Button>
        </td>
        <td>
          <Button onClick={() => handleDelete(_id)} className="bg-danger">
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageItem;
