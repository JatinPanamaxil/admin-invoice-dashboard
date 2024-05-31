import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const Profiles = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Profiles" subtitle="Welcome to your Profiles" />
      </Box>
    </Box>
  );
};

export default Profiles;
