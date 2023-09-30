import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Home=()=>{
    const[msg, setMsg]= useState(["India"])
    const[path, setPath]= useState("")

    useEffect(()=>{
        setPath(`images/${msg}.jpg`)
    },[msg])
    return(
        <Grid container spacing={2} align="center">
            
            <Grid item xs={3} sx={{ bgcolor:"whitesmoke", height:"100vh",padding:5}}>
                <Grid container spacing={2}>

               
            <Grid item xs={12}>
                <Link to="/Assign22">
                <Button  onClick={()=>setMsg("India")} variant="contained" fullWidth color="warning">India</Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={()=>setMsg("America")} variant="contained" fullWidth color="inherit">America</Button>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={()=>setMsg("Russia")} variant="contained" fullWidth color="success">Russia</Button>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={9}>
                <Grid container spacing={2} align="center">
                    
                <Card style={{background:`url(${path})`,marginTop:30,border:"2px solid black",boxShadow:"5px 5px", height:400, width:600, backgroundRepeat:"no-repeat"}} >
                    <CardContent>
                        <h1 style={{marginTop:150, fontSize:60,color:"darkgoldenrod"}}>{msg}</h1>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}