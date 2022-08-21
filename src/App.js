import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";

import NotFound from "./Components/NotFound/NotFound";

import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signin from "./Components/SignIn/Signin";
import Sigup from "./Components/SignUp/Sigup";

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="register" element={<Sigup></Sigup>}></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
