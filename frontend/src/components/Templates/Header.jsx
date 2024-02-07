import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from "../elements/BasicMenu"
import {Grid} from "@mui/material"


const Header = (props) => {
  return (
    <AppBar position="static">
    <Toolbar>
        <Grid container >
            <Grid item xs={6}>
                <BasicMenu/>
            </Grid>
        </Grid>
    </Toolbar>
  </AppBar>
  )
}

export default Header