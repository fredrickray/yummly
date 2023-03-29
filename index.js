const express = require('express');
const yummlyRoutes = require('./routes/yummly');
require('dotenv').config({ debug: process.env.X_RAPIDAPI_KEY })
console.log(process.env.X_RAPIDAPI_KEY)
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/feeds', yummlyRoutes);
// app.use("/api", yummlyRoutes)

app.listen(3030, () => {
  console.log('Server Running on port 3030');
});

app.get("/feeds", (req, res) => {
    console.log("hello")
    res.send("hello")
})
