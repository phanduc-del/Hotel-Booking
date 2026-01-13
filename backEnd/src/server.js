import "dotenv/config";
import express from 'express';
import taskRoute from './routes/roomsRoutes.js';
import { connectDB } from './config/db.js';

const app=express();
connectDB();
app.use('/api/tasks',taskRoute);

app.listen(5001,()=>{
    console.log('server nghe tren 5001');
});