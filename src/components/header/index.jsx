import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { HeaderLink, HeaderStack, NavStack } from "./styles";

function Header() {
  return (
    <HeaderStack>
      <Typography>Sneakers Store</Typography>
      <NavStack>
        <HeaderLink to="/">Main</HeaderLink>
        <HeaderLink to="/cart">Cart</HeaderLink>
        <HeaderLink to="/contacts">Contacts</HeaderLink>
      </NavStack>
    </HeaderStack>
  );
}

export default Header;
