import React, { useState ,useEffect} from 'react';
import './Login1.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login1 = ({}) => {
  const [validBookingIds, setValidBookingIds] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bookingId: ''
  });
  const [loading, setLoading] = useState(true);
  const [formError, setFormError] = useState(false);
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
    setFormError(false); // Reset form error when input changes
  };

  const handleLogin = () => {
    const { name, bookingId } = formData;
    
      if (validBookingIds.includes(bookingId)) {
        localStorage.setItem('name', name);
        localStorage.setItem('bookingId', bookingId);
        navigate('/');
      } else {
        alert('Invalid booking ID.Please Enter Correct Booking Id');
      }
      
      return;
    

   
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Slackside+One&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />

      <section className="login-section">
        <div className="form-box">
          <div className="form-value">
            <form>
              <h2 className="login-h2 madimi-one-regular" style={{ fontSize: '26px' }}>Login</h2>
              <div className="inputbox">
                <ion-icon name="mail-outline"/> <input type="text" required="" name="name" value={formData.name} onChange={handleChange} className="secular-one-regular" style={{ fontSize: '18px' }} />
                <label className="secular-one-regular" style={{ fontSize: '20px' }}>Your Name</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock-closed-outline" /><input type="text" required="" name="bookingId" value={formData.bookingId} onChange={handleChange} className="secular-one-regular" style={{ fontSize: '18px' }} />
                <label className="secular-one-regular" style={{ fontSize: '20px' }}>Booking Id</label>
              </div>
              {formError && <p className="error-message secular-one-regular" style={{ fontSize: '20px' }}>Please fill in all fields.</p>}
              <button type="button" onClick={handleLogin} disabled={!formData.name || !formData.bookingId} className="secular-one-regular" style={{ fontSize: '20px' }}>Log In</button> {/* Added type="button" and disabled attribute */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login1;
