import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


export const Russia=()=>{
    const[msg, setMsg]= useState("Scotland")
    const[path, setPath]= useState("")

    useEffect(()=>{
        setPath(`images/UK/${msg}.jpg`)
        
    },[msg])
    return(
        <Grid container spacing={2} align="center">
            
            <Grid item xs={2.4}>
                <Button  onClick={()=>setMsg("England")} variant="contained" fullWidth color="inherit">England</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Scotland")} variant="contained" fullWidth color="inherit">Scotland</Button>
            </Grid>
            <Grid item xs={2.4}>
                <Button onClick={()=>setMsg("Wales")} variant="contained" fullWidth color="inherit">Wales</Button>
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