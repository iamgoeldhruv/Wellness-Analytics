import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from './Link';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import Loader from './Loader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./smartinterpretation.css"
import { PieChart } from '@mui/x-charts/PieChart';

const Smartinterpretation = () => {
  const bookingId = localStorage.getItem('bookingId');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jokeResponses, setJokeResponses] = useState({});
  const [firstEffectCompleted, setFirstEffectCompleted] = useState(false);

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
        setFirstEffectCompleted(true); // Set flag to true after completing the API call
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bookingId]);

  const processValues = () => {
    const processedData = {};
    for (let i = 0; i < data.length; i++) {
      const test_name = data[i]['test_name'];
      for (let j = 0; j < data[i]['test_values'].length; j++) {
        const parameter_value = data[i]['test_values'][j]['parameter_name'];
        const parameterValue = parseFloat(data[i]['test_values'][j]['parameter_value'], 10);
        const lowerBound = parseFloat(data[i]['test_values'][j]['lower_bound'], 10);
        const upperBound = parseFloat(data[i]['test_values'][j]['upper_bound'], 10);

        if (!isNaN(parameterValue) && !isNaN(lowerBound) && !isNaN(upperBound)) {
          if (!processedData[test_name]) {
            processedData[test_name] = [];
          }
          processedData[test_name].push({
            parameter_value,
            parameterValue,
            lowerBound,
            upperBound,
          });
        }
      }
    }
    return processedData;
  };
  const processedData = processValues();

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        if (firstEffectCompleted) { // Check if the first useEffect has completed
          const jokes = {};
          for (const testName in processedData) {
            for (const item of processedData[testName]) {
              const response = await axios.get(`http://10.81.73.1:3000/api/ai?text=for my testname ${testName} my ${item.parameter_value} is ${item.parameterValue} and upper bound is ${item.upperBound} lower bound is ${item.lowerBound} summerize test,potential concerns,health adivisory each in 1 line and don't put ** in the answer generated and give each of the three in seprate paragraphs. remove ** if it appears in the answer.`);
              console.log(response.data);
              jokes[`${testName}_${item.parameter_value}`] = response.data.text;
            }
          }
          setJokeResponses(jokes);
        }
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, [firstEffectCompleted]); // Only run the effect when firstEffectCompleted or processedData changes

  if (loading) {
    return <div><Loader></Loader></div>;
  }

  const breakJokeResponse = (responseText) => {
    return responseText.split('* ').map((point, index) => (
      <li key={index}>{point.trim()}</li>
    ));
  };
 
  return (
    <>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Slackside+One&display=swap" rel="stylesheet" />
      <Link />
      {/* <h2 className="madimi-one-regular" style={{ fontSize: '32px', textAlign: 'center',padding:'20px' ,margin:'25px'}}>Smart Interpretation</h2> */}
      {Object.keys(processedData).map((testName, index) => (
        <div key={index} style={{ marginTop: '40px' }}>
          <MDBCard style={{ backgroundColor: '#B9D9EB' }}>
            <MDBCardBody>
              <MDBCardTitle className="madimi-one-regular" style={{ fontWeight: 'bold', color:'#3d3d47', fontSize: '24px', textAlign: 'center' }}>{testName}</MDBCardTitle>
              <ul>
                {processedData[testName].map((item, idx) => (
                  <li key={idx}>
                    <br />
                    <Card sx={{ maxWidth: 1000, margin: 'auto', textAlign: 'center', background: 'white' }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="madimi-one-regular" style={{ color: 'black', fontWeight: 'bold', fontSize: '40px' }}>
                          {item.parameter_value}
                        </Typography>
                        <PieChart
                          series={[
                            {
                              data: [
                                { id: 0, value: item.parameterValue, label: 'Your Result' },
                                { id: 1, value: item.lowerBound, label: 'Lower Bound' },
                                { id: 2, value: item.upperBound, label: 'Upper Bound' },
                              ],
                            },
                          ]}
                          width={400}
                          height={200}
                        />
                        <Typography variant="body2" color="text.secondary" className="madimi-one-regular">
                          <Typography gutterBottom variant="h5" component="div" style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
                            INTERPRETATION
                          </Typography>
                          <ul>
                            <div key={idx} style={{ border: '2px solid #2E2787', borderRadius: '10px', padding: '10px', margin: '10px' }}>
                              <Typography gutterBottom variant="h5" component="div" className="madimi-one-regular" style={{ color: 'black', fontSize: '16px' }}>
                                {breakJokeResponse(jokeResponses[`${testName}_${item.parameter_value}`] || 'Loading Interpretation...')}
                              </Typography>
                            </div>
                          </ul>
                        </Typography>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
};

export default Smartinterpretation;
