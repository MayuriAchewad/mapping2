import { Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <Card>
            <CardContent>

           
        <Grid container spacing={2} >
            
            <Grid item xs={4}>
                <NavItem path="/" label="India"/>
                {/* <Link to="/">
                    <Button color="secondary" variant="contained" fullWidth>India</Button>
                </Link> */}
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/America" label="US"/>
            </Grid>
            <Grid item xs={4}>
                <NavItem path="/Russia" label="UK"/>
            </Grid>
            {/* <Grid item xs={12}>
                <Link to="/America">
                    <Button color="info" variant="contained" fullWidth>US</Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link to="/Russia">
                    <Button color="success" variant="contained" fullWidth>UK</Button>
                </Link>
            </Grid> */}
           
        </Grid>
        </CardContent>
        </Card>
    )
}