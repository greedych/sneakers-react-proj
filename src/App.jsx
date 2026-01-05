import { Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Banner from "./components/banner";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/cart" element={<Typography>Cart</Typography>} />
        <Route path="/contacts" element={<Typography>Contacts</Typography>} />
      </Routes>
    </>
  );
}

export default App;
