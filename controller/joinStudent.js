const Student = require('../models/studentRegister');

// Controller for submitting student data
const joinStudent = async (req, res) => {
  try {
    const { name, rollNo, batch, branch, college, collegeId } = req.body;

    // Check if all required fields are provided
    if (!name || !rollNo || !batch || !branch || !college || !collegeId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate the collegeId (email format)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(collegeId)) {
      return res.status(400).json({ message: "Invalid college email format" });
    }

    // Check if the student already exists (based on roll number or collegeId)
    const existingStudent = await Student.findOne({ $or: [{ rollNo }, { collegeId }] });
    if (existingStudent) {
      return res.status(409).json({ message: "Student with this roll number or college email already exists" });
    }

    // Create new student entry
    const student = new Student({
      name,
      rollNo,
      batch,
      branch,
      college,
      collegeId,
    });

    await student.save();
    res.status(201).json({ message: "Student successfully registered", student });

  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { joinStudent };
