import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const RadiusMapping=()=>{
    const[radius, setRadius]= useState(["50px"])
    const[color, setColor]= useState("red")
    const[height, setHeight]= useState("50px")
    const[width, setWidth]= useState("50px")
    const[data, setData]= useState([])


    const handleAdd=()=>{
        setData([...data,{radius, height,width, color}])
    }
    return(
        <Grid container spacing={2}>
            
            <Grid item xs={12}>
                <TextField label="Height" value={height} onChange={(e)=>setHeight(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Width" value={width} onChange={(e)=>setWidth(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Radius" value={radius} onChange={(e)=>setRadius(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Color" value={color} onChange={(e)=>setColor(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            
            <Grid item xs={6}>
                <Button onClick={handleAdd} variant="contained" fullWidth>Submit</Button>
            </Grid>
            <Grid item xs={6}>
                <Button  variant="contained" fullWidth>Cancel</Button>
            </Grid>
            
            {
                data.map((item)=>(
                    <Grid item xs={12} align="center">
                        <Card sx={{bgcolor:(item.color),padding:10, borderRadius:(item.radius), height:(item.height), width:(item.width), border:"2px dotted black"}} >
                            <CardContent>
                                <h2 ></h2>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}