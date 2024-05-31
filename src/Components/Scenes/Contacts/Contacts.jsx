import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const Contacts = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Contacts" subtitle="Welcome to your Contacts" />
      </Box>
    </Box>
  );
};

export default Contacts;
