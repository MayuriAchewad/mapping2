import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const Assignment16 = () => {
  const datas = [
    {
      value: 1,
      label: "red",
    },
    {
      value: 1,
      label: "green",
    },
    {
      value: 1,
      label: "yellow",
    },
    {
      value: 1,
      label: "orange",
    },
    {
      value: 1,
      label: "skyblue",
    },
  ];
  const [clr, setClr] = useState(datas[0]);
  const [data, setData] = useState([]);
  console.log(data, "------");

  useEffect(() => {
    setData([...data, clr]);
  }, [clr]);

  const handleNameChange = (event) => {
    setClr(event);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Select options={datas} onChange={handleNameChange} />
      </Grid>
      <Grid item xs={2}></Grid>
      {data.map((item) => (
        <>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card sx={{ bgcolor: item.label, height: "200px" }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </>
      ))}
    </Grid>
  );
};

export default Assignment16;
