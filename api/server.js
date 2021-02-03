import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import mongoose from "mongoose";
import bodyParser from 'body-parser';

dotenv.config();
const server = express();

server.use(bodyParser.json());
server.use(cors({ origin: true }));


mongoose.connect(`mongodb://${process.env.DIR}/study-game`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
});

server.use("/api/v1/", routes);

server.listen(process.env.PORT || 3000, function() {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});