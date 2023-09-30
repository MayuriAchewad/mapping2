import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


export const India=()=>{
    const[msg, setMsg]= useState("Agra")
    const[path, setPath]= useState("")

    useEffect(()=>{
        setPath(`images/India/${msg}.jpg`);
    },[msg])
    return(
        <Grid container spacing={2} align="center">
            
            <Grid item xs={2.4}>
                <Button  onClick={()=>setMsg("Agra")} variant="contained" fullWidth color="error">Agra</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Rajasthan")} variant="contained" fullWidth color="error">Rajasthan</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Delhi")} variant="contained" fullWidth color="error">Delhi</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Mumbai")} variant="contained" fullWidth color="error">Mumbai</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Goa")} variant="contained" fullWidth color="error">Goa </Button>
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