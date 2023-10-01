import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <Card>
            <CardContent>

           
        <Grid container spacing={2} >
            
            <Grid item xs={4}>
                <NavItem path="/" label="India"/>
                
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/America" label="US"/>
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/Russia" label="UK"/>
            </Grid>
           
        </Grid>
        </CardContent>
        </Card>
    )
}