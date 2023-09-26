import { Card, CardContent, Grid } from "@mui/material"
import React, { useState } from "react"

export const Colors=()=>{
    const[data, setData]= useState(["red", "yellow", "blue","pink","yellowgreen","brown"])
    return(
        <Grid container spacing={2} align="center" >
            <Grid item xs={12}>
                <h1>Colors</h1>
            </Grid>
            {
                data.map((item)=>(
                    <Grid item xs={4}>
                        <Card sx={{bgcolor:item, textTransform:"capitalize"}}>
                            <CardContent>
                                <h3 style={{padding:10, }}>{item}</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}