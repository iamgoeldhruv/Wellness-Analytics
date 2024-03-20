const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dhruv:Dhruv2004@cluster0.kd8ttho.mongodb.net/tquest?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }

  
}

// Exporting the connectToDatabase function
module.exports = {client,connectToDatabase};

// Invoking the connectToDatabase function directly
