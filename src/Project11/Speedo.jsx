import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


export const Speedo=()=>{
    const[curr, setCurr]= useState(0)

    useEffect(()=>{
        setPath(`images/${msg}.jpg`)
    },[msg])

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>Sppedo Meter</h1>
            </Grid>
            
            <Grid item xs={3}>
                <Button onClick={()=>setGreet("Good Morning Dear")} variant="contained" fullWidth color="success">De Accelerate (-)</Button>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" fullWidth color="success">Accelerate (+)</Button>
            </Grid>
            <Grid item xs={12}>
                <Card  >
                    <CardContent>
                        0
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}