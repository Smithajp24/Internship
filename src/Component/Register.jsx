import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate=useNavigate()

    const [reg,setReg]=useState()
    const HandleChange=(e)=>{
        setReg(
            {...reg,
                [e.target.name]:e.target.value
            }
        )
        console.log(reg,"reg")
    }
    let initialValue;
    if(localStorage.getItem('UserReg')===null)
        {
            initialValue=[];
        }else{
            initialValue=JSON.parse(localStorage.getItem("UserReg"))
        }
        console.log(initialValue,"init")

        const[value,setValue]=useState(initialValue)
        console.log(value,"value")

    const HandleSubmit=async(e)=>{
        e.preventDefault(); 
        const Userid=value.length===0 ?1 :value[value.length-1].u_id+ 1;

        const details={
            u_id:Userid,
            ...reg
        }
        const updatedvalue=[...value,details]
        setValue(updatedvalue)
        localStorage.setItem("UserReg",JSON.stringify(updatedvalue))
        
        await navigate('/login')
    }
  return (
    <div>
      <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput onChange={HandleChange} label='Your Name' name='name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput onChange={HandleChange} label='Your Email' name='email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput onChange={HandleChange} label='Password' name='pass' id='form3' type='password'/>
        </div>

        

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg' onClick={HandleSubmit}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
    </div>
  )
}
