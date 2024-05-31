import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
