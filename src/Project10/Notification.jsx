import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Alert } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export const Notification = ({ msg, mytime }) => {
 const [isShow, setisShow] = useState(true);
 useEffect(() => {
  setisShow(true);

  setTimeout(() => {
   setisShow(false);
  }, mytime);
 }, [msg]);
 return (
  <Card xs={{}}>
   <CardContent>
    <Grid container spacing={2}>
     <Grid item xs={8}>
      <h3>Notification</h3>
     </Grid>
     <Grid item xs={4}>
      <NotificationsOutlinedIcon />

      <Grid item xs={12}>
       {isShow && <Alert>{msg}</Alert>}
      </Grid>
     </Grid>
    </Grid>
   </CardContent>
  </Card>
 );
};