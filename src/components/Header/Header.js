import React from "react";
import "./style.css";
import { Box, Typography } from "@mui/material";
const Header = () => {
  return (
    <Box className="header">
      <Typography variant="h4">
        Explore your favorite <br /> recipes
      </Typography>
    </Box>
  );
};

export default Header;
