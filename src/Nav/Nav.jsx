import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";

export const Nav=({item})=>{
    const[subNav, setSubNav]=useState()
    
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} >
                
                <Card>
                    <CardContent>
                   
                    
                        <ul type="none">
                            <li>
                                <Button onClick={()=>setSubNav(!subNav)}>{subNav?"Home-":"Home+"}</Button>
                                {subNav &&
                                    <ul type="none">
                                        <li>-1</li>
                                        <li>-2</li>
                                    </ul>
                                }
                            </li>
                            <li>
                                <Button onClick={()=>setSubNav(!subNav)}>{subNav?"About -":"About +"}</Button>
                                {
                                    subNav &&
                                    <ul type="none">
                                        <li>-1</li>
                                        <li>-2</li>
                                    </ul>
                                }
                            </li>
                            <li>
                                <Button onClick={()=>setSubNav}>{subNav?"Contact -":"Contact +"}</Button>
                                {
                                    subNav &&
                                    <ul type="none">
                                        <li>-1</li>
                                        <li>-2</li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    
                    </CardContent>
                </Card>
                
            </Grid>
        </Grid>
    )
}