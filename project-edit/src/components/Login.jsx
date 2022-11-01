import React ,{ useState }from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Login.css'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"


function Login() {


  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  const emailChange = event => {
    setEmail(event.target.value);
  };
  const passwordChange = event => {
    setPassword(event.target.value);
  };

  const sendToBackend=()=>{
    const data={
      "email":email,
      "password":password
    }

    axios.post(`http://localhost:5000/login`,data)
    .then(response=>{
      
    })
    .catch(error=>{
       console.log(error)
    })


  }

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={emailChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={passwordChange}/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
              
                <MDBBtn className="mb-4 w-100" onClick={sendToBackend}>Login</MDBBtn>

              <Link to="/register" style={{textDecoration:"none"}}  >
                <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              </Link>
            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;