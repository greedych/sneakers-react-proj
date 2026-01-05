import { Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  gap: "40px",
  backgroundColor: "#3B3C3D",
  color: "white",
  padding: "30px 200px",
});

export const NavStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  gap: "40px",
  backgroundColor: "#3B3C3D",
});

export const HeaderLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
});
