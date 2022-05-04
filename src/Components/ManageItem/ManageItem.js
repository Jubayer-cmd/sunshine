import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ManageItem = ({ product, setProduct }) => {
  const { _id, name, supplier, price, quantity, images, description } = product;
  const navigate = useNavigate();

  const handleAddItems = () => {
    navigate("/additems");
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://evening-mesa-55779.herokuapp.com/inventory/${id}`;
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
    <tbody data-aos="fade-down">
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
          <Button onClick={handleAddItems}>Add</Button>
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
