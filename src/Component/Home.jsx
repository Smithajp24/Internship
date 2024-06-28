import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const isAuthenticated =localStorage.getItem('token')!==null;
  const navigate=useNavigate();
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/login')
    }
  })
  return (
    <div style={{display:"flex"}}>
        <div style={{width:"700px"}}>
            <h1 style={{marginTop:"25px",fontFamily:"aries"}}>Welcome</h1>
            <br/>
            <p ><strong>to shopping app</strong></p></div>
        <div style={{display:"flex",justifyContent:"right",width:"600px"}}>
      <img  style={{width:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuwKFfvMWRtvLVAMCw27By9C2gk-YYve67A&s'></img>
      </div>
    </div>
  )
}
