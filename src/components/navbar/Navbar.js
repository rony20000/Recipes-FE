import React from "react";
import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/recipes/search" className="logo">
            Recipes
          </Link>
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ disply: "flex", justifyContent: "flex-end" }}
        >
          <Typography>
            <Link to="/" className="logo">
              All Recipes
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
