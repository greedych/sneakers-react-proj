import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Stack>
      <Typography>Sneakers Store</Typography>
      <Stack>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Stack>
    </Stack>
  );
}

export default Header;
