import React from "react";
import { Card,CardContent, Grid, Alert } from "@mui/material";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export const Notification=({msg})=>{
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h3>Notification</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <NotificationsOutlinedIcon/>
                    </Grid>
                    <Grid item xs={12}>
                        <Alert severity="success">
                            {msg}
                        </Alert>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}