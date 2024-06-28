import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import Box from '@mui/material';

export default function Allprod() {
    const[allprods, setAll]=useState([])

    const [search,setSearch]=useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products`)
        .then((res)=>{
            console.log(res.data.products,111)
            setAll(res.data.products)
        })
        .catch((err)=>{
            console.log(err,222);
        })
    },[]);
    const handleChange=(e)=>{
      console.log(e.target.value,"search")
      setSearch((e.target.value).toLowerCase())
    }
  return (
    <div>
      <TextField onChange={handleChange}
      label="Search products here"
      InputProps={{style:{fontSize:40} }}/>
      <Grid container spacing={2} style={{marginTop:20}}>

        
            {allprods.filter((value)=>value.title.toLowerCase().includes(search)).map((item)=>{
              console.log(item)
              if(item==null || item==""){
                return(
                  <h1>Hello</h1>
                )
              }else{
                return(
<Grid  xs={8} sm={6} md={4} lg={3} >
       
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.images[0]}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  )}})}


     </Grid>
    </div>
  )
}
