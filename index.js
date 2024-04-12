const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const url =
  "mongodb+srv://suryateja1938102074:suryaamazonintern@cluster0.ldxadbe.mongodb.net/";

const dbName = "nxttrendz";

async function connectToMongoDB_attendance() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("done");
    return client.db(dbName).collection("attendance");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

app.get("/getAttendance/:number", async (req, res) => {
  try {
    const { number } = req.params;
    const collection = await connectToMongoDB_attendance();
    const files = await collection.find({ roll_no: number }).toArray();
    res.status(200).json(files);
  } catch (error) {
    console.error("Error retrieving files:", error);
    res.status(500).json({ percentage: "Null" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
