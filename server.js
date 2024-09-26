const express = require("express");
const app = express();
const msql = require("mysql2");
const dotenv = require("dotenv");

// Question 1 goes here
// app.use(express.json());
// app.use(cors());
dotenv.config();

// Question 2 goes here
// Create Connection Problem
const db = msql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Question 3 goes here
// Testing Connection
db.connect((err) => {
  //Connection is not Successfull
  if (err) return console.log("Error connecting to the database: ", err);
  console.log("Successfull connected to MySQL:", db.threadId);
});

// Question 4 goes here
// retrieve all patients
app.get("", (req, res) => {
  const getPatients = "SELECT first_name, last_name FROM patients";
  db.query(getPatients, (err, data) => {
    // if I have an error
    if (err) {
      return res.status(400).send("Failed to get patients", err);
    }

    // res.status(200).render('data', { data })
    res.status(200).send(data);
  });
});

// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
