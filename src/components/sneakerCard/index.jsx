import { Box, Stack, Typography } from "@mui/material";
import { SneakerCardStack, SneakerImg } from "./styles";

function SneakerCard({ img, name, price }) {
  return (
    <SneakerCardStack>
      <SneakerImg src={img} alt="shoes" />
      <Typography>{name}</Typography>
      <Stack>
        <Stack>
          <Typography>Price</Typography>
          <Typography>{price}$</Typography>
        </Stack>
        <Box></Box>
      </Stack>
    </SneakerCardStack>
  );
}

export default SneakerCard;
