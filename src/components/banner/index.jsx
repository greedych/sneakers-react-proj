import { Stack } from "@mui/material";
import banner from "../../assets/Banner.png";

function Banner() {
  return (
    <Stack sx={{ padding: "30px 200px", minWidth: "400px" }}>
      <img src={banner} alt="banner" />
    </Stack>
  );
}

export default Banner;
