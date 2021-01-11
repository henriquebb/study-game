import dotenv from 'dotenv';
import express from "express";
import homeRoute from "./routes/home.js";

dotenv.config();
const server = express();

server.use("/", homeRoute);

server.listen(process.env.PORT || 3000, function() {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});