const express = require("express");
const app = express();
const msql = require("msql2");
const dotenv = require("dotenv");

// Question 1 goes here
app.use(express.json());
app.use(cors());
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

// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
