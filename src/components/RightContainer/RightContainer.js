import React from "react";
import { Box } from "@mui/material";
const RightContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "25%",
        height: 400,
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(0, 0, 0, 0.02)",
        borderRadius: 8,
        boxShadow: "4px 15px 25px 2px hsla(241, 100%, 89%, 0.301)",
        zIndex: -1,
        right: "5%",
      }}
    ></Box>
  );
};

export default RightContainer;
