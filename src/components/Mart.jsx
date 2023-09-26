import React, {useEffect, useState} from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import { ProductItem } from "./ProductItem";

export const Mart=()=>{
    const [data, setData] =useState([]);
    const [origdata, setOrigdata] =useState([]);
    const [cat, setCat] = useState([]);
    const [selectedCat, setSelectedCat] = useState([])
    const getData= async()=>{
        const result = await axios.get("https://fakestoreapi.com/products")
        setData(result.data);
        setOrigdata(result.data);
        const resultCat = await axios.get("https://fakestoreapi.com/products/categories");
        setCat(resultCat.data)
    }
    useEffect(()=>{
        const filtered = origdata.filter(item=> item.category === selectedCat)
        setData(filtered)
    },[selectedCat])

    useEffect(()=>{
        getData()
    },[]);
    return(
        <Grid container spacing={2}>
            {
                cat.map((item)=>
                    <Grid item xs={3}>
                        <Button onClick={()=>setSelectedCat(item)} variant="contained" fullWidth color="secondary">{item}</Button>
                    </Grid>    
                )
            }
            {
                data.map((item)=>
                    <ProductItem item={item} />
                )
            }
        </Grid>
    )
}