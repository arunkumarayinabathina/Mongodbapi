require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use("/api/products", productRoute);

app.get('/',(req,res)=>{
    res.send("Welcome to home page!");
})

const user_id=process.env.USER_ID;
const password = process.env.PASS;
mongoose
  .connect(
    `mongodb+srv://${user_id}:${password}@backend.fif3f.mongodb.net/NODE-api?retryWrites=true&w=majority&appName=Backend`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });