const express = require('express');
const {connectToDatabase} = require('./database/connection');
const authRoutes = require('./routes/authroutes');
const userRoutes=require('./routes/uploadroutes');
const aiRoutes=require('./routes/airoutes')
const hostname = '0.0.0.0';
const bookingRoutes = require('./routes/testdetailsroutes');
const bookingIdRoutes = require('./routes/bookingidroutes');

const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/',userRoutes)
app.use('/api/bookings', bookingRoutes);
app.use('/api/ai', aiRoutes);
console.log("routes registered")



app.use('/api/booking_id', bookingIdRoutes);


connectToDatabase()
    .then(() => {
       
        app.listen(PORT, hostname, () => {
            console.log(`Server running at http://${hostname}:${PORT}/`);
          });
    })
    .catch(error => {
        console.error('Error connecting to database:', error);
    });
