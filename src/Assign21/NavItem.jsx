import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavItem=({path, label})=>{
    return(
        <Link to={path}>
            <Button  variant="contained" fullWidth>{label}</Button>
        </Link>
    )
}