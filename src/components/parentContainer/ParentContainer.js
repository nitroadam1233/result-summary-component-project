import Box from "@mui/material/Box";
import LeftContainer from "../LeftContainer/LeftContainer";
import RightContainer from "../RightContainer/RightContainer";
import React from "react";

const ParentContainer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <LeftContainer />
      <RightContainer />
    </Box>
  );
};

export default ParentContainer;
