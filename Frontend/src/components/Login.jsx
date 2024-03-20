import React, { useEffect, useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';


import {useNavigate} from "react-router-dom"
const Login = () => {
  const [validBookingIds, setValidBookingIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bookingId: ''
  });

  useEffect(() => {
    fetchBookingIds();
  }, []);

  const fetchBookingIds = async () => {
    try {
      setLoading(true); 
      const response = await axios.get('http://10.81.73.1:3000/api/booking_id');
      console.log(`data is ${response.data}`)
      setValidBookingIds(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = () => {
    const { name, bookingId } = formData;
    alert(validBookingIds)
    if (validBookingIds.includes(bookingId)) {
      localStorage.setItem('name', name);
      localStorage.setItem('bookingId', bookingId);
      navigate('/');
    } else {
      alert('Invalid booking ID');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              label='Your Name'
              id='formControlLg'
              type='text'
              size="lg"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass='mb-4 mx-5 w-100'
              label='BookingId'
              id='formControlLg'
              type='text'
              size="lg"
              name="bookingId"
              value={formData.bookingId}
              onChange={handleChange}
            />
            <MDBBtn
              className="mb-4 px-5 mx-5 w-100"
              color='info'
              size='lg'
              onClick={handleLogin}
            >
              Login
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
