import { Stack, styled, Typography } from "@mui/material";

export const SneakersStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  gap: "3%",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "37px 0",
});

export const SneakersListStack = styled(Stack)({
  padding: "30px 200px",
});

export const SneakersListTitle = styled(Typography)({
  fontWeight: "700",
  fontSize: "3rem",
  paddingBottom: "37px",
  borderBottom: "1px solid #EAEAEA",
});
