const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRoute = require("./routes/Category");


dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("Foodly Connected to Database"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("categories", CategoryRoute);


app.get('/', (req, res) => res.send('Hello World'))
app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is Running on Port ${process.env.PORT}!`))