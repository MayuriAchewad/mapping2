import { Button, Grid, TextField } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import Select  from "react-select";
import { Notification } from "./Notification";

export const Assign20=()=>{
    const[data, setData]= useState([])
    const[name, setName]= useState("Mayuri")
    const[isShow, setIsShow]= useState(true)
    const[msg, setMsg]=useState('Your Registration has been Secceessed')

    // const styles={
    //     zIndex:1,
    //     backgrond
    // }

    useEffect(()=>{
        setIsShow(true);
        setTimeout(()=>{
            setIsShow(false)
        },3000)
    },[msg])

    useEffect(()=>{
        setData(gender)
    },[])

    const handleNameChange=(selOpt)=>{
        setName(selOpt.label)
    }

   
    const gender=[
        {value:"male", label:"Male"},
        {value:"female", label:"Female"},
        {value:"other", label:"Other"}
    ]
    const Education=[
        {value:"BE",label:"BE"},
        {value:"ba",label:"BE"},
        {value:"bcom",label:"BCOM"},
        {value:"bsc",label:"BSC"}
    ]
    return(
        <Grid container spacing={2} sx={{border:"2px solid black",padding:5}}>
            
            <Grid item xs={12}>
            Student's Name
                <TextField label="Student's Name" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
            email id
                <TextField label="email id" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
            Mobile Number
                <TextField type="number" label="Mobile Number" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
            User Name
                <TextField label="User Name" variant="outlined" fullWidth/>
            </Grid>
            
            <Grid item xs={6}>
            DOB
                <TextField type="date"  variant="outlined" fullWidth/>
            </Grid>
            
            <Grid item xs={6}>
                Gender
                <Select onChange={handleNameChange} style={{zIndex:1}}  options={data}></Select>
            </Grid>
            
            <Grid item xs={6}>
                Education
                <Select onChange={handleNameChange}  options={Education}/>
            </Grid>
            
            <Grid item xs={6}>
            Password
                <TextField label="Password" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={6}>
            Confirm Password
                <TextField label="Confirm Password" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <Button  variant="contained" fullWidth>Submit</Button>
            </Grid>
            {
                isShow?
            <Grid item xs={12}>
                <Notification msg={msg}/>
            </Grid>:""
            }
        </Grid>
    )
}