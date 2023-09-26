import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Form=()=>{
    const[data, setData]= useState([])
    const[name, setName]=useState("")
    const[radius, setRadius]=useState()

    const handleSubmit=()=>{
        setData([...data,{name,radius}])
    }

    const handleDelete=(item)=>{
        const filtered= data.filter((i,index)=> index !== item)
        setData(filtered)
    }

   

    return(
        <Grid container spacing={2}>
             <Grid item xs={8}>
                <TextField fullWidth variant="outlined" onChange={(e)=>setName(e.target.value)}/>
             </Grid>
             <Grid item xs={4}>
                <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
             </Grid>
            {
                data.map((item,index)=>(
                    <Grid item xs={3}>
                        <Card sx={{bgcolor:item}}>
                            <CardContent>
                                <h4>{item}</h4>
                                <Button onClick={()=>handleDelete(index)}>X</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}