import { Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Typography>Cart</Typography>} />
        <Route path="/contacts" element={<Typography>Contacts</Typography>} />
      </Routes>
    </>
  );
}

export default App;
