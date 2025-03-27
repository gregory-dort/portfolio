// Initializing Dependecies
const express = require("express");
const cors = require("cors");

// Importing DB Elements
const connectDB = require("./config/db");

// Call DB Connection
connectDB();

// Initializing app
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // Allows API requets from frontend Localhost
    credentials: true,
    methods: "GET, POST, PUT, DELETE", // Allows GET, POST, PUT and DELETE requests
    authorizedHeaders: "Content-Type, Authorization", // Allows Content-Type and Authorization headers
}))