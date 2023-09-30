import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


export const Assign22=()=>{
    const[msg, setMsg]= useState("Mumbai")
    const[path, setPath]= useState("")

    useEffect(()=>{
        setPath(`images/img/${msg}.jpg`)
    },[msg])
    return(
        <Grid container spacing={2} align="center">
            
            {/* <Grid item xs={3}>
                <Button onClick={()=>setMsg("London")} variant="contained" fullWidth color="success">London</Button>
            </Grid> */}
            <Grid item xs={2.4}>
                <Button  onClick={()=>setMsg("Agra")} variant="contained" fullWidth color="error">I</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Rajasthan")} variant="contained" fullWidth color="warning">N</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Delhi")} variant="contained" fullWidth color="inherit">D</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Mumbai")} variant="contained" fullWidth color="success">I</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Goa")} variant="contained" fullWidth color="error">A</Button>
            </Grid>
            <Grid item xs={12}>
                <Card style={{background:`url(${path})`,marginTop:30,border:"2px solid black",boxShadow:"5px 5px", height:500, width:900, backgroundRepeat:"no-repeat"}} >
                    <CardContent>
                        <h1 style={{marginTop:150, fontSize:60,color:"darkgoldenrod"}}>{msg}</h1>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}