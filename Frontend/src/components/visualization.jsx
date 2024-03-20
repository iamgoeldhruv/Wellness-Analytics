import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import { BarChart } from "@mui/x-charts/BarChart";
import Loader from "./Loader";
import "./visualization.css";

const BarCharts = () => {
  const bookingId = localStorage.getItem("bookingId");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://10.81.73.1:3000/api/bookings?booking_id=${bookingId}`
        );
        const parsedData = response.data.map((item) => ({
          ...item,
          test_values: JSON.parse(item.test_values),
        }));
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bookingId]);

  const processValues = () => {
    const processedData = {};
    for (let i = 0; i < data.length; i++) {
      const test_name = data[i]["test_name"];
      for (let j = 0; j < data[i]["test_values"].length; j++) {
        const parameter_value = data[i]["test_values"][j]["parameter_name"];
        const parameterValue = parseFloat(
          data[i]["test_values"][j]["parameter_value"],
          10
        );
        const lowerBound = parseFloat(
          data[i]["test_values"][j]["lower_bound"],
          10
        );
        const upperBound = parseFloat(
          data[i]["test_values"][j]["upper_bound"],
          10
        );

        if (
          !isNaN(parameterValue) &&
          !isNaN(lowerBound) &&
          !isNaN(upperBound)
        ) {
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
  if (loading) {
    return <div><Loader></Loader></div>;
  }

  return (
    <>
      <Navbar />
      <Link />
      {Object.keys(processedData).map((testName, index) => (
        <div key={index} style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <MDBCard style={{ backgroundColor: "#E1EBEE", width: "1000px", display: "flex", justifyContent: "space-between" }}>
            <MDBCardBody>
              <MDBCardTitle
                style={{
                  fontWeight: "bold",
                  color: "blue",
                  fontSize: "24px",
                  textAlign: "center",
                }}
              >
                {testName}
              </MDBCardTitle>
              <ul>
                {processedData[testName].map((item, idx) => (
                  <li key={idx}>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily: "Arial",
                            fontSize: "40",
                          }}
                        >
                          {item.parameter_value}
                        </Typography>
                        <BarChart
                          xAxis={[
                            {
                              scaleType: "band",
                              data: [item.parameter_value],
                            },
                          ]}
                          series={[
                            { data: [item.lowerBound] },
                            { data: [item.parameterValue] },
                            { data: [item.upperBound] },
                          ]}
                          width={500}
                          height={300}
                        />
                      </div>
                      <div>
                      <Card
                          style={{
                            width: "400px",
                            height: "200px",
                            marginTop: "50px",
                            backgroundColor: "white",
                            border: "4px solid black", 
                            borderRadius: "30px", 
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                  }}
                        >
                          <CardContent>
                          <Typography
                            variant="h6"
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                              fontSize: "30px",
                              fontFamily: "Arial",
                            }}
                          >
                            Graph Interpretation
                          </Typography>
                            <Typography>
                             
                            {item.lowerBound > item.parameterValue
                              ? <span style={{ color: 'red', fontSize: '50', textAlign: 'center',marginTop:'20' ,fontWeight: "bold",}}>WARNING: Your value is less than the desired value. Please see Smart Interpretation for outcome.</span>
                              : item.parameterValue > item.upperBound
                              ? <span style={{ color: 'red', fontSize: '50', textAlign: 'center',marginTop:'20',fontWeight: "bold" }}>WARNING: Your value is higher than the desired value. Please refer to Smart Interpretation.</span>
                              : <span style={{ color: '#228b22',fontSize: '50', textAlign: 'center',marginTop:'50',fontWeight: "bold"}}>NORMAL: Your value is within the desired range.No need to worry!</span>
                            }
                            </Typography>
                          </CardContent>
                        </Card>

                      </div>
                    </div>
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

export default BarCharts;
