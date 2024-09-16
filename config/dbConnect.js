const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    // Replace <DB_URI> with your MongoDB URI string
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
