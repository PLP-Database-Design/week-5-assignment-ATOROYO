const express = require("express");
const app = express();
const msql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

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

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Question 4 goes here
// Question 1 goes here
app.get("", (req, res) => {
  const getPatients =
    "SELECT patient_id, first_name last_name, date_of_birth FROM patients";
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
