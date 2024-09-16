const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  rollNo: {
    type: String,
    required: [true, 'Roll number is required'],
    unique: true,
    trim: true
  },
  batch: {
    type: Number, // Change to Number
    required: [true, 'Batch is required'],
    enum: [1, 2, 3, 4], // Update enum to numeric values
  },
  branch: {
    type: String,
    required: [true, 'Branch is required'],
    trim: true,
    enum: ['CSE', 'IT', 'ECE', 'ICE', 'IPE', 'MECH', 'TT', 'DS', 'MNC'] // Valid branch options
  },
  college: {
    type: String,
    required: [true, 'College name is required'],
    trim: true,
    default: 'NIT Jalandhar' // Default to NIT Jalandhar
  },
  collegeId: {
    type: String,
    required: [true, 'College email is required'],
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Email format validation
      },
      message: props => `${props.value} is not a valid email!`
    }
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt fields
});

// Create the model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
