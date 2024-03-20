import React from 'react';
import Body from '../images/body.png';
import './BodyChart.css'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const BodyChart = () => {
  return (
    <div className="veryOuter">
     <div className="body-container">
      <img src={Body} alt="Body" className="body-image" />
     </div>
    <div className="headcard bg-light-blue" style={{     position: 'absolute',
    top: '20%',
    left: '26%',
    width: '13%',
    border: '2px solid black',
    height: '33%',
 }}>
      <CardContent>
      <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
        HEAD
      </Typography>
        <Typography variant="body2" style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
          THIS IS HEAD. MORE INFORMATION WILL BE PROVIDED TO YOU AFTERWARDS.
        </Typography>
      </CardContent>
    </div>
    <div className="stomachcard bg-light-blue" style={{ position: 'absolute',
    top: '20%',
    left: '60%',
    width: '13%',
    border: '2px solid black',
    height: '33%', }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
          STOMACH
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
          THIS IS STOMACH. MORE INFORMATION WILL BE PROVIDED TO YOU AFTERWARDS.
        </Typography>

      </CardContent>
    </div>
    <div className="heartcard bg-light-blue" style={{     position: 'absolute',
    top: '70%',
    left: '26%',
    width: '13%',
    border: '2px solid black',
    height: '33%'
 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
          HEART
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
          THIS IS HEART. MORE INFORMATION WILL BE PROVIDED TO YOU AFTERWARDS.
        </Typography>
      </CardContent>
    </div>
    <div className="legscard bg-light-blue" style={{ position: 'absolute',
    top: '70%',
    left: '60%',
    width: '13%',
    border: '2px solid black',
    height: '215px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
          LEGS
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#333' }}>
          THESE ARE LEGS. MORE INFORMATION WILL BE PROVIDED TO YOU AFTERWARDS.
        </Typography>
      </CardContent>
    </div>
    </div>
  );
}

export default BodyChart;
