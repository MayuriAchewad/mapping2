import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Nav } from "./Nav";
import MenuIcon from '@mui/icons-material/Menu';
import { RadiusMapping } from "./RadiusMapping";

export const Landing=()=>{
    const[nav , setNav]=useState()  

    return(
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Button onClick={()=>setNav(!nav)}><MenuIcon/></Button>
            </Grid>
            {nav && 
            <Grid item xs={2}>
                <Nav/>
            </Grid>
            
        }
        <Grid item xs={9} sx={{margin:"0px auto"}}>
                <RadiusMapping/>
            </Grid>       
        </Grid>
    )
}