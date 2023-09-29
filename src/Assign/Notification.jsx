import React, { useEffect, useState } from "react";
import { Card,CardContent, Grid, Alert } from "@mui/material";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export const Notification=({msg})=>{
    const[isShow, setIsShow]= useState(true)

    useEffect(()=>{
        setIsShow(true);
        setTimeout(()=>{
            setIsShow(false)
        },3000)
    },[msg])

    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                        <NotificationsOutlinedIcon/>
                    </Grid>

                    <Grid item xs={8}>
                        <h3>Notification</h3>
                    </Grid>
                    <Grid item xs={12}>
                    {
                        isShow?
                        <Alert severity="success">
                            {msg}
                        </Alert>:""
} 
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}