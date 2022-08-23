require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

db.on('erorr', (erorr) => console.error(erorr));
db.once('open', () => console.log('Connected to the database'));

app.use(express.json());

const port = process.env.port || 5000;

const todoRouter = require('./routes/todoItems')

app.use('/todoItems', todoRouter)


app.listen(port, () => console.log('server started'));

