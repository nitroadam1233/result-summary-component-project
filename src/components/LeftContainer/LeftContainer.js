import { Box, Typography } from "@mui/material";
import RoundContainer from "./RoundContainer";
import React from "react";

const LeftContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage:
          "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));",
        boxShadow: "4px 20px 20px 10px hsla(241, 100%, 89%, 0.185)",
        flexDirection: "column",
        width: "21%",
        height: 400,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        level="h3"
        sx={{
          color: "hsl(241, 100%, 89%)",
          fontWeight: 800,
          pt: 3,
          fontSize: 16,
          wordSpacing: 0.2,
        }}
      >
        Your Result
      </Typography>
      <RoundContainer />
      <Typography
        level="h3"
        sx={{
          fontSize: 22,
          fontWeight: 0,
          color: "white",
        }}
      >
        Great
      </Typography>
    </Box>
  );
};

export default LeftContainer;
