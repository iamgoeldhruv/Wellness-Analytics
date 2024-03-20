const uri = "mongodb+srv://Dhruv:Dhruv2004@cluster0.kd8ttho.mongodb.net/tquest?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose');
const csv = require('csvtojson');

async function importData(req, res) {
  try {
    // Connect to the MongoDB database (tquest)
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Parse CSV file to JSON array
    const jsonArray = await csv().fromFile(req.file.path);
    console.log(`JSON array length is ${jsonArray.length}`);

    // Insert data into the 'customer' collection directly
    const Customer = mongoose.connection.collection('customer');
    await Customer.insertMany(jsonArray);

    res.send({ status: 200, success: true, msg: 'Data imported successfully' });
  } catch (error) {
    res.status(400).send({ status: 400, success: false, msg: error.message });
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
}

module.exports = { importData };
