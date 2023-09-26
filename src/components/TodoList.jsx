import {
  Grid,
  TextField,
  Button,
  CardContent,
  Card,
  Alert,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
{
  /* <DeleteOutlineIcon/> */
}
export const TodoList = () => {
  const [txt, setTxt] = useState("");
  const [data, setData] = useState([]);
  const [clr, setClr] = useState("");
  const [con, setCon] = useState(false); //   console.log(data);
  const handleAdd = () => {
    txt !== "" && setData([...data, txt]);
    setTxt("");
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you agree to Delete!!!")) {
      const result = data.filter((item, ind) => ind !== index);
      setData(result);
    }
    setCon(true);
  };
  useEffect(() => {
    if (data.length == 0) {
      setClr("red");
    } else if (data.length >= 1 && data.length <= 5) {
      setClr("green");
    } else {
      setClr("blue");
    }
  }, [data]);
  return (
    <Grid container spacing={2}>
           {" "}
      <Grid item xs={3}>
               {" "}
        <Card sx={{ bgcolor: clr, height: 55 }}>
                    <CardContent></CardContent>       {" "}
        </Card>
             {" "}
      </Grid>
           {" "}
      <Grid item xs={7}>
               {" "}
        <TextField
          onChange={(e) => setTxt(e.target.value)}
          variant="outlined"
          label="Enter..."
          fullWidth
          value={txt}
        />
             {" "}
      </Grid>
           {" "}
      <Grid item xs={2}>
               {" "}
        <Button
          variant="contained"
          onClick={handleAdd}
          fullWidth
          sx={{ height: 55 }}
        >
                    Add        {" "}
        </Button>
             {" "}
      </Grid>
           {" "}
      {data.map((item, index) => (
        <Grid item xs={4}>
                   {" "}
          <Card sx={{ textAlign: "center" }}>
                       {" "}
            <CardContent>
                            <h1> {item.toUpperCase()} </h1>             {" "}
              <Button
                onClick={() => handleDelete(index)}
                variant="contained"
                color="error"
              >
                                Delete <DeleteOutlineIcon />             {" "}
              </Button>
                         {" "}
            </CardContent>
                     {" "}
          </Card>
                 {" "}
        </Grid>
      ))}
           {" "}
      <Grid item xs={12}>
                {con && <Alert> {con ? "Delete SucessFull" : ""} </Alert>}     {" "}
      </Grid>
         {" "}
    </Grid>
  );
};
