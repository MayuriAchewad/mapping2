import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";


export const Fruit=()=>{
    const[name, setName]=useState("apple")
    const[path, setPath]=useState("")

    useEffect(()=>{
        setPath(`images/${name}.jpg`)
    },[name])


    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <h1>{name}</h1>
                        <img height={150} width={150} src={path} alt={name} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("apple")} variant="contained" fullWidth>Apple</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("strawbery")} variant="contained" fullWidth>strawbery</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("mango")} variant="contained" fullWidth>mango</Button>
            </Grid>
            {/* {
                data.map((item)=>(
                    <Grid item xs={2}>
                        <Button fullWidth variant="contained"></Button>
                    </Grid>
                ))
            } */}
        </Grid>
    )
}