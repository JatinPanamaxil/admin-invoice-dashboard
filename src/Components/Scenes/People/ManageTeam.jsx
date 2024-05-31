import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";

const ManageTeam = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ManageTeam" subtitle="Welcome to ManageTeam" />
      </Box>
    </Box>
  );
};

export default ManageTeam;
