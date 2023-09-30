import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const Assignment16 = () => {
  
  const [clr, setClr] = useState(datas[0]);
  const [data, setData] = useState([]);
  console.log(data, "------");

  useEffect(() => {
    setData([...data, clr]);
  }, [clr]);

  
  return (
    <Grid container spacing={2}>
      
    </Grid>
  );
};

export default Assignment16;
