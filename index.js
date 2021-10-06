//mongodb+srv://hollywood:<password>@movies.8vueh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import playerRoutes from './routes/Player.js';

const app = express(); 
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5000 ;
const CONNECTION_URL = process.env.CONNECTION_URL;



app.use(express.json({ limit:"50mb", extended: true}));
app.use(express.urlencoded({ limit:"50mb", extended: true}));
app.use("/Player",playerRoutes);
mongoose.connect(CONNECTION_URL,
                  {useNewUrlParser: true},
                  ()=>{console.log("Connected to DB")}
)

app.listen(PORT, ()=> console.log(`Server running on port : http://localhost : ${PORT}`));

