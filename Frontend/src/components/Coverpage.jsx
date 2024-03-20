
import React, { useState, useEffect } from 'react';
import coverImage from '../images/cover_1.png'; // Import the image correctly
import axios from 'axios';
const AddTextToImage = () => {
    const bookingId = localStorage.getItem('bookingId');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          }
        };
    
        fetchData();
      }, [bookingId]);
    
     
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Use viewport height
    
  };

  const imageStyle = {
    maxWidth: '100%', // Adjust as needed
    height: '90vh', // Maintain aspect ratio
    zIndex: 1, // Ensure image is above text
  };

  const textStyle1 = {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '6.5rem', // Adjust as needed for bottom margin
    left: '46%', // Center horizontally
    transform: 'translateX(-50%)', // Center horizontally
    zIndex: 2, // Ensure text is above image
  };

  const textStyle2 = {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '3.5rem', // Adjust as needed for bottom margin
    left: '46%', // Center horizontally
    transform: 'translateX(-50%)', // Center horizontally
    zIndex: 2, // Ensure text is above image
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
    
      <img src={coverImage} alt="Original Image" style={imageStyle} />
      <div style={textStyle1}>{data[0]['customer_name']}</div>
      <div style={textStyle2}>{data[0]['booking_id']}</div>
    </div>
  );
};

export default AddTextToImage;
