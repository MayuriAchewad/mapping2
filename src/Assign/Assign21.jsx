import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const datas = [
    { value: 1, label: "red" },
    { value: 1, label: "green" },
    { value: 1, label: "yellow" },
    { value: 1, label: "orange" },
    { value: 1, label: "skyblue" },
  ];

export const Assign21 = () => {
  const [data, setData] = useState([]);
  const [clr, setClr]=useState(datas[0])

  

  const handleClrChange=(item)=>{
    setClr(item)
  }

    useEffect(()=>{
        setData([...data,clr])
    
  },[clr])
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Select onChange={handleClrChange} options={datas} />
      </Grid>
      {data.map((item,ind) => (
        <>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card sx={{ bgcolor: item.label,height:200 }}>
                <CardContent>

                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </>
      ))}
    </Grid>
  );
};
