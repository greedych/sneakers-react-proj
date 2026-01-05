import { Box, Stack, Typography } from "@mui/material";

function SneakerCard({ img, name, price }) {
  return (
    <Stack>
      <img src={img} alt="shoes" />
      <Typography>{name}</Typography>
      <Stack>
        <Stack>
          <Typography>Price</Typography>
          <Typography>{price}</Typography>
        </Stack>
        <Box></Box>
      </Stack>
    </Stack>
  );
}

export default SneakerCard;
