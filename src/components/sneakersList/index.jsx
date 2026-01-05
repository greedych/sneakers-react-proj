import { Stack, Typography } from "@mui/material";
import { data } from "../../data";
import SneakerCard from "../sneakerCard";

function SneakersList() {
  return (
    <Stack>
      <Typography>Sneakers</Typography>
      {data.map((sneaker) => (
        <SneakerCard
          img={sneaker.img}
          name={sneaker.name}
          price={sneaker.price}
        />
      ))}
    </Stack>
  );
}

export default SneakersList;
