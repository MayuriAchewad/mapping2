import { Grid } from "@mui/material";
import React, { useState } from "react";
import { statusData } from "../data";
import Select from "react-select";
import { Notification } from "./Notification";


export const HOme=()=>{
    const[status,setStatus]=useState();
    const[msg,setMsg]=useState("");
    const[name,setName]=useState("Rahul")

    const handleNameChange=(selOpt)=>{
        setName(selOpt.label)
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                    Names Dropdown
            </Grid>
            <Grid item xs={6}>
                <Select onChange={handleNameChange} options={statusData}>
                Status Dropdown
                </Select>
            </Grid>
            <Grid item xs={6}>
                Notification of WhatsApp
            </Grid>
            <Grid item xs={6}>
                <Notification msg={msg}/>
            </Grid>
            <Grid item xs={6}>
                Email Notification
            </Grid>
            <Grid item xs={6}>
                List of Pass
                List of Fail
            </Grid>
            
        </Grid>
    )
}