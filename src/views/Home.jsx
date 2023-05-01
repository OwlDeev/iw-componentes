import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/Home.css";
import Buttons from "../components/Buttons";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <div className="divButtons">
            <Buttons />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
