import dotenv from 'dotenv';
import express from "express";
import homeRoute from "./routes/home.js";
import mongoose from "mongoose";

dotenv.config();
const server = express();

mongoose.connect(`mongodb://${process.env.DIR}/study-game`, {useNewUrlParser: true, useUnifiedTopology: true});

server.use("/", homeRoute);

server.listen(process.env.PORT || 3000, function() {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});