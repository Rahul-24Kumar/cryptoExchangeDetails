const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const cors = require("cors");
const route  = require('./routes/route');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static("public"));
dotenv.config();
//app.use(cors());


app.use("/", route);

let port = process.env.PORT;
let databaseUrl = process.env.DB_URL;

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDb Is Connected"))
  .catch((err) => console.log(err));



app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
