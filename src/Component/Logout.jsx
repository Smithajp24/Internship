import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  let navigate=useNavigate()
  useEffect(()=>{
    localStorage.removeItem('token');
    navigate('/login');
  })
  return (
    <div>
      
    </div>
  )
}
