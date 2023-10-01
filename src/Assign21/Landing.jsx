import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Assign22 } from "../Assign/Assign22";
import { Nav } from "./Nav";
import { India } from "./India";
import { Russia } from "./Russia";
import { America } from "./America";

export const Landing=()=>{
    return(
        
      <BrowserRouter>

     <Nav/>
     <br />
      <Routes>

        <Route path='/' element={<India/>}/>
        <Route path='/Russia' element={<Russia/>}/>
        <Route path='/America' element={<America/>}/>
      </Routes>
      </BrowserRouter>
   
    )
}