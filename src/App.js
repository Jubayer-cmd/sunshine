import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Components/AddItems/AddItems";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import ManageItems from "./Components/ManageItems/ManageItems";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
        <Route path="/manage" element={<ManageItems></ManageItems>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
