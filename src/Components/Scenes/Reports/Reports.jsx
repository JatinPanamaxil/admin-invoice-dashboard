import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const Reports = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Reports" subtitle="Welcome to your Reports" />
      </Box>
    </Box>
  );
};

export default Reports;
