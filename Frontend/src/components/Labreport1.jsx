import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "./Link";
// import Loader from './Loader';
import './Labreport.css'; // You can import additional CSS styles specific to Labreport if needed
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit';
import './Labreport.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Labreport = () => {
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

  if (loading) {
    return <div>Loading....</div>; // Show loading indicator while data is being fetched
  }

  return (
    <>
      {/* Include Google Fonts link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Slackside+One&display=swap" rel="stylesheet" />

      <Link />
      <MDBCard style={{ backgroundColor: 'white' }}>
        {/* <MDBCardHeader style={{ fontSize: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LAB REPORT</MDBCardHeader> */}
        <MDBCardBody>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <MDBCardText className="madimi-one-regular" style={{ fontSize: '25px' }}>User Name: {data[0]['customer_name']}</MDBCardText>
              <MDBCardText className="madimi-one-regular" style={{ fontSize: '25px' }}>Booking Date: {data[0]['booking_date']}</MDBCardText>
            </div>
            <div>
              <MDBCardText className="madimi-one-regular" style={{ fontSize: '25px' }}>Collecting Date: {data[0]['collection_date']}</MDBCardText>
              <MDBCardText className="madimi-one-regular" style={{ fontSize: '25px' }}>Update Time: {data[0]['updated_at']}</MDBCardText>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
      {data.map((item, index) => (
        <div key={index} style={{ marginTop: '40px' }}>
          <MDBCard style={{ backgroundColor: '#B9D9EB' }}>
            <MDBCardBody>
              <MDBCardTitle className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>{item['test_name']}</MDBCardTitle>
              <MDBTable bordered style={{ border: '1px solid black' }}>
                <MDBTableHead className="custom-table-head">
                  <tr>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Parameter Name</th>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Parameter Value</th>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Lower Bound</th>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Reference Range</th>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Upper Bound</th>
                    <th className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>Unit</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody className="rbody">
                  {item['test_values'].map((value, idx) => (
                    <tr key={idx}>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['parameter_name']}</td>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['parameter_value']}</td>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['lower_bound']}</td>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['display_value']}</td>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['upper_bound']}</td>
                      <td className="madimi-one-regular" style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>{value['unit']}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
};

export default Labreport;
