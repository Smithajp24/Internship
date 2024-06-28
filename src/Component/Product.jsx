import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Product() {
    const {catname}=useParams();
    console.log(catname,"product");
const [product ,setProduct]=useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${catname}`)
        .then((res)=>{
            // console.log(res.data,"aaa");
            console.log(res.data.products,111);
            setProduct(res.data.products);
        })
        .catch((err)=>{
            console.log(err,222);
        })
    },[catname]);
  return (
    <div>
        <Grid container spacing={2} style={{marginTop:20}}>
            {product.map((item)=>(

        <Grid item xs={8} sm={6} md={4} lg={3} key={item.id}>
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
     ))}
     </Grid>
    </div>
  )
}
