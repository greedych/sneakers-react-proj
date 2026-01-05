import { Stack, Typography } from "@mui/material";
import { data } from "../../data";
import SneakerCard from "../sneakerCard";
import { SneakersListStack, SneakersListTitle, SneakersStack } from "./styles";

function SneakersList() {
  return (
    <SneakersListStack>
      <SneakersListTitle variant="h1">Sneakers</SneakersListTitle>
      <SneakersStack>
        {data.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            img={sneaker.image}
            name={sneaker.name}
            price={sneaker.price}
          />
        ))}
      </SneakersStack>
    </SneakersListStack>
  );
}

export default SneakersList;
