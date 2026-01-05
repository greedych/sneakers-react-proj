import { Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import { Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Typography>Main</Typography>} />
      </Routes>
    </>
  );
}

export default App;
