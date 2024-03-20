import React, { useEffect, useState } from "react";
import axios from 'axios';
import LinkProfile from "./LinkProfile";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const bookingId = localStorage.getItem('bookingId');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Set background color when component mounts
    document.body.classList.add('profile-background');

    return () => {
      // Remove background color when component unmounts
      document.body.classList.remove('profile-background');
    };
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://10.81.73.1:3000/api/bookings?booking_id=${bookingId}`);
        const parsedData = response.data.map(item => ({
          ...item,
          test_values: JSON.parse(item.test_values)
        }));
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even in case of error
      }
    };

    fetchData();
  }, [bookingId]);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (loading) {
    return <div><Loader></Loader></div>; // Show loading indicator while data is being fetched
  }

  if (data.length === 0) {
    navigate('/login/'); // Redirect to login page if user is not logged in or data is empty
    return null;
  }

  return (
    <div className="app-container">
      <LinkProfile />
      <div className="container">
        <div className="row login_box">
          <div className="col-md-12 col-xs-12" align="center">
            <div className="line">
              <h3>Welcome to your profile!</h3>
            </div>
            <div className="outter">
              <img
                src="https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg"
                className="image-circle"
                alt="Profile Image"
              />
            </div>
            <h1>Hi {data[0]?.customer_name}</h1> {/* Use optional chaining to handle undefined */}
          </div>
          <div className="col-md-12 col-xs-12 login_control">
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap', backgroundColor: 'lightblue' }}>Name               : {data[0]?.customer_name}</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap' }}>BookingId        : {data[0]?.booking_id}</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap', backgroundColor: 'lightblue' }}>Gender             : Data not found!</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap' }}>Booking Date   : {data[0].booking_date}</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap', backgroundColor: 'lightblue' }}>Update Date     : {data[0].updated_at}</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap' }}>Lead Id             : {data[0].lead_id}</h4>
            </div>
            <div className="control">
              <h4 style={{ whiteSpace: 'pre-wrap', backgroundColor: 'lightblue' }}>Age                   : Data not found!</h4>
            </div>
          </div>
          <div align="center">
              <button className="btn btn-orange" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
      </div>
    </div>
  );
};

// document.body.style.backgroundColor = "rgb(172, 197, 216)";
export default Profile;
