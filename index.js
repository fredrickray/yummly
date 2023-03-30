const express = require('express');
const yummlyRoutes = require('./routes/yummly');
require('dotenv').config()
// console.log(process.env.X_RAPIDAPI_KEY)
const app = express();
const port =  process.env.PORT || 3030
app.use(express.urlencoded({ extended: true }));
app.use('/feeds', yummlyRoutes);
// app.use("/api", yummlyRoutes)

app.listen(port, () => {
  console.log('Server Running on port 3030');
});

app.get("/", (req, res) => {
    console.log("Server is running ⚡⚡️⚡️️")
    res.send("hello")
})
