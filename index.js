const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Apply CORS middleware to allow cross-origin requests
app.use(cors());

app.use(express.json());

const strataRoutes = require("./routes/strataRoutes");

app.use("/api/v1", strataRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

const dbConnect = require("./config/dbConnect");
dbConnect();
