import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const Invoices = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Invoices" subtitle="Welcome to your Invoices" />
      </Box>
    </Box>
  );
};

export default Invoices;
