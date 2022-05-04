import axios from "axios";
import { useEffect, useState } from "react";

const UseGadgets = () => {
  const [gadget, setGadgets] = useState([]);

  useEffect(() => {
    axios
      .get("https://evening-mesa-55779.herokuapp.com/inventory")
      .then((response) => setGadgets(response.data));
  }, [gadget]);
  return [gadget, setGadgets];
};

export default UseGadgets;
