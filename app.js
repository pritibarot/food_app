import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {dbConnection} from './database/dbConnection.js';
import {errorMiddleware} from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });


app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
    })
);

app.use(express.json());            //it is used to convert json string to json object
app.use(express.urlencoded( { extended : true } ) );   //It is used to parse the url encoded data 
app.use('/api/v1/reservation', reservationRouter);
dbConnection();

app.use(errorMiddleware)
export default app;