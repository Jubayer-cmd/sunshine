import axios from "axios";
import React from "react";

const AddItems = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    const images = event.target.images.value;
    const supplier = event.target.supplier.value;

    const gadgets = { name, price, quantity, description, images, supplier };

    axios
      .post("https://evening-mesa-55779.herokuapp.com/additems", gadgets)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          alert("added");
          event.target.reset();
        }
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="mx-auto w-50 ">
        <h1 className="text-primary text-center my-3">Add New Gadgets</h1>
        <form onSubmit={handleSubmit}>
          <input
            className=" w-100 mb-2"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2"
            type="number"
            name="price"
            id=""
            placeholder="Price"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2"
            type="number"
            name="quantity"
            id=""
            placeholder="Quantity"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2"
            type="text"
            name="description"
            id=""
            placeholder="Description"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2"
            type="text"
            name="supplier"
            id=""
            placeholder="Supplier"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2"
            type="text"
            name="images"
            id=""
            placeholder="Images link"
            required
          />{" "}
          <br />
          <input
            className=" w-100 mb-2 bg-primary text-white border-0 p-2 rounded "
            type="submit"
            value="Add Gadgets"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
